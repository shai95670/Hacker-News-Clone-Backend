import { extendType, nonNull, objectType, stringArg, intArg, FieldResolver } from 'nexus';
import { NexusGenObjects } from "../../nexus-typegen";

export const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.int('id'),
        t.nonNull.string('email')
        t.nonNull.string('password')
        t.nonNull.list.nonNull.field("links", {
            type: "Link",
            resolve(parent, args, context){
                return context.prisma.user.findUnique({where: { id: parent.id }}).links();
            }
        })
        t.nonNull.list.nonNull.field("votes", {
            type: "Link",
            resolve(parent, args, context) {
                return context.prisma.user.findUnique({where: { id: parent.id }}).votes();
            }
        })
    },
});
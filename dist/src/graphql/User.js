"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const nexus_1 = require("nexus");
exports.User = (0, nexus_1.objectType)({
    name: 'User',
    definition(t) {
        t.nonNull.int('id'),
            t.nonNull.string('email');
        t.nonNull.string('password');
        t.nonNull.list.nonNull.field("links", {
            type: "Link",
            resolve(parent, args, context) {
                return context.prisma.user.findUnique({ where: { id: parent.id } }).links();
            }
        });
        t.nonNull.list.nonNull.field("votes", {
            type: "Link",
            resolve(parent, args, context) {
                return context.prisma.user.findUnique({ where: { id: parent.id } }).votes();
            }
        });
    },
});
//# sourceMappingURL=User.js.map
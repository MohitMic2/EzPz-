"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPaginationSwagger = exports.IPagination = void 0;
class IPagination {
}
exports.IPagination = IPagination;
exports.IPaginationSwagger = {
    curPage: { type: 'number', default: 1 },
    perPage: { type: 'number', default: 10 },
    sortBy: { type: 'string', default: 'createdAt' },
    direction: { type: 'enum', enum: ['ASC', 'DESC'], default: 'desc' },
    whereClause: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                key: { type: 'string' },
                value: { type: 'string' },
                operator: { type: 'string' },
            },
        },
    },
};
//# sourceMappingURL=paginationEum.js.map
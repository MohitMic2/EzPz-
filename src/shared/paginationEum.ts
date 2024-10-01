export class IPagination {
  curPage: number;
  perPage: number;
  sortBy: string;
  direction?: string;
  whereClause: any;
}

export const IPaginationSwagger = {
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

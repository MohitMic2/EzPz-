export declare class IPagination {
    curPage: number;
    perPage: number;
    sortBy: string;
    direction?: string;
    whereClause: any;
}
export declare const IPaginationSwagger: {
    curPage: {
        type: string;
        default: number;
    };
    perPage: {
        type: string;
        default: number;
    };
    sortBy: {
        type: string;
        default: string;
    };
    direction: {
        type: string;
        enum: string[];
        default: string;
    };
    whereClause: {
        type: string;
        items: {
            type: string;
            properties: {
                key: {
                    type: string;
                };
                value: {
                    type: string;
                };
                operator: {
                    type: string;
                };
            };
        };
    };
};

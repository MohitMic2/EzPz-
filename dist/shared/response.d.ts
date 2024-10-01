export declare const WriteResponse: (statusCode: number, data?: any, message?: string) => {
    statusCode: number;
    message: string;
    data: any;
} | {
    statusCode: number;
    message: string;
    data?: undefined;
};
export declare const paginateResponse: (list: any, count: number) => any;

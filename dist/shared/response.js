"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateResponse = exports.WriteResponse = void 0;
const common_1 = require("@nestjs/common");
const WriteResponse = (statusCode, data = {}, message = null) => {
    if (statusCode == 200) {
        return { statusCode, message: message ? message : 'Success', data };
    }
    else if (statusCode == 400) {
        return { statusCode, message: message ? message : 'Success', data };
    }
    else {
        return { statusCode, message };
    }
};
exports.WriteResponse = WriteResponse;
const paginateResponse = (list, count) => {
    throw new common_1.HttpException({
        statusCode: list.length ? 200 : 404,
        message: list.length ? 'Success' : 'Record not found.',
        data: list,
        count,
    }, 200);
};
exports.paginateResponse = paginateResponse;
//# sourceMappingURL=response.js.map
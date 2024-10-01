"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFailedExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let QueryFailedExceptionFilter = class QueryFailedExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        var { message } = exception;
        console.log(exception);
        if (exception.driverError.code == 'ER_DUP_ENTRY') {
            message = 'Duplicate entry exists.';
        }
        if (exception.driverError.code == 'ER_PARSE_ERROR') {
            message = 'something went wrong.';
        }
        response
            .status(200)
            .json(GlobalResponseError(common_1.HttpStatus.BAD_REQUEST, message, request));
    }
};
QueryFailedExceptionFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.QueryFailedError)
], QueryFailedExceptionFilter);
exports.QueryFailedExceptionFilter = QueryFailedExceptionFilter;
const GlobalResponseError = (statusCode, message, request) => {
    return {
        statusCode: statusCode,
        message,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
    };
};
//# sourceMappingURL=http-exception.filter.filter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFilter = void 0;
const common_1 = require("@nestjs/common");
const ValidationFilter = (error) => {
    let errors = '';
    error.forEach((i) => {
        if (i.children.length) {
            i.children.forEach((d) => {
                if (d.constraints) {
                    errors = Object.values(d.constraints).join(',');
                }
            });
        }
        if (i.constraints) {
            errors = Object.values(i.constraints).join(',');
        }
    });
    throw new common_1.BadRequestException({
        statusCode: 400,
        message: errors,
    });
};
exports.ValidationFilter = ValidationFilter;
//# sourceMappingURL=validation-exception.filter.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const state_entity_1 = require("./entities/state.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const response_1 = require("../shared/response");
let StateService = class StateService {
    constructor(stateRepository) {
        this.stateRepository = stateRepository;
    }
    async create(createStateDto) {
        try {
            if (createStateDto.id == 0) {
                await this.stateRepository.save(createStateDto);
                return (0, response_1.WriteResponse)(200, true, 'State Created Successfully.');
            }
            else {
                await this.stateRepository.save(createStateDto);
                return (0, response_1.WriteResponse)(200, true, 'State updated successfully.');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    async findAll() {
        const State = await this.stateRepository.find({
            where: { isDeleted: false },
        });
        if (State.length) {
            return (0, response_1.WriteResponse)(200, State, 'State Found Successfully');
        }
        return (0, response_1.WriteResponse)(404, false, 'State not found.');
    }
    async findOne(id) {
        const State = await this.stateRepository.find({
            where: { isDeleted: false, countryId: id },
        });
        if (State) {
            return (0, response_1.WriteResponse)(200, State, 'State found successfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'State not found.');
    }
    async remove(id) {
        const State = await this.stateRepository.update({ id: id }, { isDeleted: true });
        if (State.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'State not found');
        }
        return (0, response_1.WriteResponse)(200, true, 'State deleted successfully.');
    }
};
StateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(state_entity_1.State)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StateService);
exports.StateService = StateService;
//# sourceMappingURL=state.service.js.map
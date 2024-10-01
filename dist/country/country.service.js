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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const country_entity_1 = require("./entities/country.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const response_1 = require("../shared/response");
const axios_1 = require("axios");
let CountryService = class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }
    async create(createCountryDto) {
        try {
            if (createCountryDto.id == 0) {
                await this.countryRepository.save(createCountryDto);
                return (0, response_1.WriteResponse)(200, true, 'Country Created Successfully.');
            }
            else {
                await this.countryRepository.save(createCountryDto);
                return (0, response_1.WriteResponse)(200, true, 'Country updated successfully.');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    async GetCountry(data) {
        try {
            let responseData = await this.countryRepository.find();
            return (0, response_1.WriteResponse)(200, responseData, "success");
        }
        catch (err) {
            console.log(err);
            return (0, response_1.WriteResponse)(400, false, err.message);
        }
    }
    async GetState(data) {
        try {
            let url = `https://www.universal-tutorial.com/api/states/${data.StateName}`;
            let header = {
                "Authorization": `Bearer ${data.Token}`,
                "Accept": "application/json"
            };
            const response = await axios_1.default.get(url, { headers: header });
            const responseData = response.data;
            return (0, response_1.WriteResponse)(200, responseData, "success");
        }
        catch (err) {
            return (0, response_1.WriteResponse)(400, false, err.message);
        }
    }
    async GetCity(data) {
        try {
            let url = `https://www.universal-tutorial.com/api/cities/${data.cityName}`;
            let header = {
                "Authorization": `Bearer ${data.Token}`,
                "Accept": "application/json"
            };
            const response = await axios_1.default.get(url, { headers: header });
            const responseData = response.data;
            return (0, response_1.WriteResponse)(200, responseData, "success");
        }
        catch (err) {
            return (0, response_1.WriteResponse)(400, false, err.message);
        }
    }
    async findAll() {
        const Country = await this.countryRepository.find({
            where: { isDeleted: false },
        });
        if (Country) {
            const count = Country.length;
            return (0, response_1.WriteResponse)(200, Country, 'Country Found Successfully');
        }
        return (0, response_1.WriteResponse)(404, false, 'Country not found.');
    }
    async findOne(id) {
        const Country = await this.countryRepository.findOne({
            where: { isDeleted: false, id: id },
        });
        if (Country) {
            return (0, response_1.WriteResponse)(200, Country, 'Country found successfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'Country not found.');
    }
    async remove(id) {
        const Country = await this.countryRepository.delete({ id: id, isDeleted: false });
        if (Country.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'Country not found');
        }
        return (0, response_1.WriteResponse)(200, true, 'Country deleted successfully.');
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(country_entity_1.Country)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map
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
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("axios");
const user_atemp_que_entity_1 = require("../user-atemp-ques/entities/user-atemp-que.entity");
const typeorm_2 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
let ChatService = class ChatService {
    constructor(userAttendQuestionservice) {
        this.userAttendQuestionservice = userAttendQuestionservice;
        this.openAiApiKey =
            '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';
    }
    async generateChatResponse(ids) {
        try {
            const newIds = ids === null || ids === void 0 ? void 0 : ids.map(Number);
            let querry = 'The user wants to create a trip plan based on their preferences. They have answered the following questions:      ';
            let arr = await this.userAttendQuestionservice.find({
                where: {
                    id: (0, typeorm_2.In)(ids),
                },
            });
            arr = arr === null || arr === void 0 ? void 0 : arr.map((e) => e.userAns);
            const localEvent = arr[8] === 'No' ? `don't` : 'want to';
            querry = `Find me ${arr[4]} place in ${arr[0]} I want to ${arr[2]}.
        I AM ${arr[3]}, And I am able to spend ${arr[5]}.
        and I have ${arr[6]} AVAILABLE”,
        I m looking for a ${arr[7]} EXPERIENCE and I ${localEvent} see local event`;
            querry += `Based on the user's preferences, create a trip plan in JSON format with the following structure:
        "title" : title of trip 
        "tripdetails"  : which should be an object that contain ( duration (must be string ) , budget (must be string ), traveling (must be string ), experience (must be string )) 
        "description" : which should be an array of object and that object should contain 
        "heading1" : which shoud contain the day 
        "heading2" :  heading one is also be an array of object which should contain key 
        "morning" : what to do explain in detail about the place where to travel
        "afternoon" : what to do explain in detail about the place where to travel
        "evening" : what to do explain in detail about the place where to travel
        all these key should be in small letter`;
            const response = await axios_1.default.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: querry },
                ],
                max_tokens: 1500,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.openAiApiKey}`,
                },
            });
            console.log(response, "==))==");
            const resposncdata = await response.data.choices[0].message.content.trim();
            return resposncdata;
        }
        catch (error) {
            if (error.response) {
                console.error('Error generating chat response:', error.response.data);
            }
            else {
                console.error('Error generating chat response:', error.message);
            }
            throw new Error('Failed to generate chat response');
        }
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_atemp_que_entity_1.UserAtempQue)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map
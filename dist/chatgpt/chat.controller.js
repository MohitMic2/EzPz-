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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const chat_dto_1 = require("./dto/chat.dto");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async root(chatDTO) {
        try {
            console.log('Raw response:');
            const response = await this.chatService.generateChatResponse(chatDTO.ids);
            let sanitizedResponse = response.trim();
            const jsonStartIndex = sanitizedResponse.indexOf('```json');
            const jsonEndIndex = sanitizedResponse.lastIndexOf('```');
            if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
                const jsonContent = sanitizedResponse.slice(jsonStartIndex + 7, jsonEndIndex).trim();
                console.log("Extracted JSON Content:", jsonContent);
                try {
                    const parsedResponse = JSON.parse(jsonContent);
                    return { data: parsedResponse };
                }
                catch (jsonError) {
                    console.warn('Failed to parse extracted JSON:', jsonError.message);
                    return { data: { message: jsonContent } };
                }
            }
            else {
                console.warn('No JSON content found, returning raw response');
                return { data: sanitizedResponse };
            }
        }
        catch (error) {
            console.error('Error processing request:', error.message);
            return { data: { error: 'Failed to generate response' } };
        }
    }
};
__decorate([
    (0, common_1.Post)('GetResponseOFTourPlan'),
    (0, common_1.Render)('index.hbs'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chat_dto_1.ChatDTO]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "root", null);
ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map
import { ChatService } from './chat.service';
import { ChatDTO } from './dto/chat.dto';
export declare class ChatController {
    chatService: ChatService;
    constructor(chatService: ChatService);
    root(chatDTO: ChatDTO): Promise<{
        data: any;
    }>;
}

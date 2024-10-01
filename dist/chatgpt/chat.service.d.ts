import { UserAtempQue } from 'src/user-atemp-ques/entities/user-atemp-que.entity';
import { Repository } from 'typeorm';
export declare class ChatService {
    private userAttendQuestionservice;
    private openAiApiKey;
    constructor(userAttendQuestionservice: Repository<UserAtempQue>);
    generateChatResponse(ids: []): Promise<any>;
}

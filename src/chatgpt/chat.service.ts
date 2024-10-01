import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { config } from 'dotenv';
import { WriteResponse } from 'src/shared/response';
import { UserAtempQue } from 'src/user-atemp-ques/entities/user-atemp-que.entity';
import { In, Repository } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class ChatService {
  private openAiApiKey: string;
  constructor(
    @InjectRepository(UserAtempQue)
    private userAttendQuestionservice: Repository<UserAtempQue>,
  ) {
    //this.openAiApiKey = "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";
    // this.openAiApiKey = "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";
    this.openAiApiKey =
      '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';
  }

  // async generateChatResponse(ids: []): Promise<any> {
  //   try {
  //     let newIds : any = ids.map(Number)
  //     let querry = 'The user wants to create a trip plan based on their preferences. They have answered the following questions:      '
  //     // for(let i=0;i<ids.length;i++){
  //     //   let UserQuesAns = await this.userAttendQuestionservice.findOne({ where : { id : ids[i] }})
  //     //   if(UserQuesAns){
  //     //     querry += ` Question :  ${UserQuesAns.question}` + ` \n Answer : ${UserQuesAns.userAns} \n \n`
  //     //   }
  //     // }
  //     let arr : any = await this.userAttendQuestionservice.find({
  //       where: {
  //         id:  In(ids),
  //       },
  //     })
  //     arr = arr.map((e)=> e = e.userAns)
  //     let localEvent = 'No'
  //     if(arr[8] == 'No'){
  //       localEvent = `don't`
  //     }else{
  //       localEvent = 'want to'
  //     }
  //     querry = `Find me ${arr[4]} place in ${arr[0]} I want to ${arr[2]}.
  //      I AM ${arr[3]},  And I am able to spend ${arr[5]}.
  //       and I have ${arr[6]} AVAILABLE”,
  //        I m looking for a ${arr[7]} EXPERIENCE and I ${localEvent} see local event`
  //     querry += `Based on the user's preferences, create a trip plan in JSON format with the following structure:

  //     "title" : title of trip
  //     "tripdetails"  : which should be an object that contain ( duration (must be string ) , budget (must be string ), traveling (must be string ),experience (must be string ))
  //     "description" : which should be an array of object and that object should contain
  //     "heading1" : which shoud contain the day
  //     "heading2" :  heading one is also be an array of object which should contain key
  //     "morning" : what to do explain in detail about the place where to travel
  //     "afternoon" : what to do explain in detail about the place where to travel
  //     "evening" : what to do explain in detail about the place where to travel
  //     all these key should be in small latter
  //     `
  //     const response = await axios.post(
  //       'https://api.openai.com/v1/engines/text-davinci-003/completions',
  //       {
  //         prompt:  querry,
  //         max_tokens: 1500, // Adjust the token limit as per your requirement
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // Authorization: "Bearer" + ` ${process.env.OPENAI_API_KEY}`,
  //           Authorization: `Bearer ${this.openAiApiKey}`,

  //         },
  //       },
  //     );

  //     let resposncdata = await response.data.choices[0].text.trim()
  //     let newdata = resposncdata.replace('\n','')
  //     newdata = newdata.replace('\n','')
  //     return newdata
  //   } catch (error) {
  //     console.error('Error generating chat response:', error.message)
  //     throw new Error('Failed to generate chat response');
  //   }
  // }
  async generateChatResponse(ids: []): Promise<any> {
    try {
      const newIds: any = ids?.map(Number);
      let querry =
        'The user wants to create a trip plan based on their preferences. They have answered the following questions:      ';

      let arr: any = await this.userAttendQuestionservice.find({
        where: {
          id: In(ids),
        },
      });
      arr = arr?.map((e) => e.userAns);
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

      const response = await axios.post(
        //newapi
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: querry },
          ],
          max_tokens: 1500,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.openAiApiKey}`,
          },
        },
      );
      console.log(response,"==))==")

      const resposncdata =
        await response.data.choices[0].message.content.trim();
      return resposncdata;
    } catch (error) {
      if (error.response) {
        console.error('Error generating chat response:', error.response.data);
      } else {
        console.error('Error generating chat response:', error.message);
      }
      throw new Error('Failed to generate chat response');
    }
  }
}

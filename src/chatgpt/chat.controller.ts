// import {
//   Controller,
//   Post,
//   Body,
//   Get,
//   Render
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { AuthGuard } from '@nestjs/passport';
// import { ChatService } from './chat.service';
// import { Configuration, OpenAIApi } from 'openai'
// import * as dotenv from 'dotenv';
// dotenv.config();
// import { ChatDTO } from './dto/chat.dto';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// // @Controller('chat')
// // export class ChatController {
// //   constructor(public chatService: ChatService) {}
// //   @Post('GetResponseOFTourPlan')
// //   @Render('index')
// //   async root(@Body() chatDTO:ChatDTO){
// //     const response = await this.chatService.generateChatResponse(chatDTO.ids);
// //     return { data : JSON.parse(response)}
// //   }
// // }
// // @Controller('chat')
// // export class ChatController {
// //   constructor(public chatService: ChatService) {}

// //   @Post('GetResponseOFTourPlan')
// //   @Render('index')
// //   async root(@Body() chatDTO: ChatDTO) {
// //     try {
// //       const response = await this.chatService.generateChatResponse(chatDTO.ids);
// //       console.log('Raw response:', response); // Log the raw response

// //       // Check if response is a valid JSON string
// //       if (typeof response === 'string') {
// //         return { data: JSON.parse(response) };
// //       }

// //       // If it's already an object, return it directly
// //       return { data: response };

// //     } catch (error) {
// //       console.error('Error processing request:', error.message);
// //       // Handle the error appropriately, e.g., render an error view or return a default response
// //       return { data: { error: 'Failed to generate response' } };
// //     }
// //   }
// // }

// @Controller('chat')
// export class ChatController {
//   constructor(public chatService: ChatService) { }

//   @Post('GetResponseOFTourPlan')
//   @Render('index')
//   async root(@Body() chatDTO: ChatDTO) {
//     try {

//       const response = await this.chatService.generateChatResponse(chatDTO.ids);
//       console.log('Raw response:', response); // Log the raw response

//       // Sanitize and check if response is a valid JSON string
//       // let sanitizedResponse = response.trim();
//       // if (sanitizedResponse.startsWith('`')) {
//       //   sanitizedResponse = sanitizedResponse.slice(1);
//       // }

//       // // Check if it's a string before parsing
//       let sanitizedResponse = response.trim();
//       if (sanitizedResponse.startsWith('```')) {
//         sanitizedResponse = sanitizedResponse.slice(6); // Remove the triple backticks
//       }
//       if (sanitizedResponse.endsWith('```')) {
//         sanitizedResponse = sanitizedResponse.slice(0, -6); // Remove the trailing triple backticks
//       }

//       if (typeof sanitizedResponse === 'string') {
//         return { data: JSON.parse(sanitizedResponse) };
//       }

//       // If it's already an object, return it directly
//       return { data: response };

//     } catch (error) {
//       console.error('Error processing request:', error.message);
//       // Handle the error appropriately, e.g., render an error view or return a default response
//       return { data: { error: 'Failed to generate response' } };
//     }
//   }
// }
//////////////////......//////////////////

// import { Controller, Post, Body, Render } from '@nestjs/common';
// import { ChatService } from './chat.service';
// import { ChatDTO } from './dto/chat.dto';

// @Controller('chat')
// export class ChatController {
//   constructor(public chatService: ChatService) { }

//   @Post('GetResponseOFTourPlan')
//   @Render('index')
//   async root(@Body() chatDTO: ChatDTO) {
//     try {
//       const response = await this.chatService.generateChatResponse(chatDTO.ids);
//       console.log('Raw response:', response); // Log the raw response

//       // Trim and sanitize the response
//       let sanitizedResponse = response.trim();

//       // Remove triple backticks for markdown-style responses
//       if (sanitizedResponse.startsWith('```json')) {
//         sanitizedResponse = sanitizedResponse.slice(7); // Remove the starting ```json
//       }
//       if (sanitizedResponse.endsWith('```')) {
//         sanitizedResponse = sanitizedResponse.slice(0, -3); // Remove the trailing ```
//       }

//       // Try to parse the response as JSON

//       const parsedResponse = JSON.parse(sanitizedResponse);
//       return { data: parsedResponse }; // Return parsed JSON data
//     } catch (error) {
//       console.log(error, "====>><<<");
//       console.error('Error processing request:', error.message);
//       return { data: { error: 'Failed to generate response' } }; // Return error message if the main try fails
//     }
//   }
// }

import { Controller, Post, Body, Render } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatDTO } from './dto/chat.dto';

@Controller('chat')
export class ChatController {
  constructor(public chatService: ChatService) { }

  @Post('GetResponseOFTourPlan')
  @Render('index.hbs')
  async root(@Body() chatDTO: ChatDTO) {
    try {
      console.log('Raw response:'); // Log the raw response

      const response = await this.chatService.generateChatResponse(chatDTO.ids);
  
      // Trim and sanitize the response
      let sanitizedResponse = response.trim();
  
      // Step 1: Extract JSON part between ```json and ```
      const jsonStartIndex = sanitizedResponse.indexOf('```json');
      const jsonEndIndex = sanitizedResponse.lastIndexOf('```');
  
      if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
        // Step 2: Extract the JSON portion between backticks
        const jsonContent = sanitizedResponse.slice(jsonStartIndex + 7, jsonEndIndex).trim();
        console.log("Extracted JSON Content:", jsonContent);
  
        // Step 3: Try to parse the extracted JSON
        try {
          const parsedResponse = JSON.parse(jsonContent); // Attempt to parse the cleaned JSON
          return { data: parsedResponse }; // Return parsed JSON data
        } catch (jsonError) {
          console.warn('Failed to parse extracted JSON:', jsonError.message);
          return { data: { message: jsonContent } }; // Return the extracted JSON as text if parsing fails
        }
      } else {
        // If no JSON found, return the plain response
        console.warn('No JSON content found, returning raw response');
        return { data: sanitizedResponse };
      }
    } catch (error) {
      console.error('Error processing request:', error.message);
      return { data: { error: 'Failed to generate response' } }; // Return error message if the main try fails
    }
  }
  
}

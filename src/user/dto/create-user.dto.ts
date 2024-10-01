import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Length, Matches, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {

  @ApiProperty()
  @IsString()
  @Length(3, 50)
  userName: string;

  //@IsEmail()
  @ApiProperty()
  @Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), { message:
    'invalid email'

  })
  @IsNotEmpty()
  email: string;


  @ApiProperty()
   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{ message:
    'invalid Password'})
  @Length(6)
  password: string;


  @ApiProperty()
  @IsNotEmpty()
  //@MinLength(10)
  //  @MaxLength(10)
  @Matches(new RegExp("^[0-9]{8,14}$"),{ message:
    'invalid mobile Number'})

   mobileNo: string;

  }

  export class UpdateUserdto{
    @ApiProperty()
    id: number;

    @ApiProperty()
  @IsString()
  @Length(3, 50)
  userName: string;


    //@IsEmail()
    //@ApiProperty()
    //@Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), {
    //  message: 'email must be an email address.',
    //})
    //@IsNotEmpty()
    //email: string;

    @ApiProperty()
    @IsNotEmpty()
    @Matches(new RegExp("^[0-9]{8,14}$"),{ message:
      'Mobile Should be between 8 to 14'})
     mobileNo: string;


    @ApiProperty()
    //@Min(14)
    @IsNumber()
    age: number;

    @ApiProperty()
    @IsString()
    gender: string;

    @ApiProperty()
    @IsString()
    city: string;
  }

  export class LoginDTO {
    @IsEmail()
    @ApiProperty()
    @Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), {
      message: 'email must be an email address.',
    })
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
  }

  export class ResetPassDto {
    @ApiProperty()
    @IsString()
    email : string;

    @ApiProperty()
    @IsNotEmpty()
     @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
       message:
         'Required a strong password ( one upper , one special , one number )',
     })
    @Length(6)
    new_password: string;
  }

  export class ChangePasswordDto {

    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty({
      type: 'string',
      description: 'Please enter old password.',
      required: true,
    })
    oldPassword: string;

    @ApiProperty({
      type: 'string',
      description: 'Please enter new password.',
      required: true,
    })
    newPassword: string;
  }
  export class ForgetPassword {
    @IsEmail()
    @ApiProperty()
    @Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), {
      message: 'email must be an email address.',
    })
    @IsNotEmpty()
    email: string;
  }
   export class VerifyDto{
    @IsEmail()
    @ApiProperty()
    @Matches(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), {
      message: 'email must be an email address.',
    })
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    enteredOtp:string

   }









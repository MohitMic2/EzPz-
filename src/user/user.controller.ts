import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpStatus, HttpException, UnauthorizedException, HttpCode, UseGuards, Req, Query, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { ChangePasswordDto, CreateUserDto, ForgetPassword, LoginDTO, ResetPassDto, VerifyDto } from './dto/create-user.dto';
import { UpdateUserdto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { WriteResponse } from 'src/shared/response';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService,
    private jwtService: JwtService,
    ) {}

  //User Signup
  @Get("/health")
  async  health(@Req() req: any) {
    console.log("working")
    return WriteResponse(200, true, 'health route working fine dev.');
  }
  @Post('/signup')
  async SingIn(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
    try {
      let isExits = await this.userService.getUserByEmail(CreateUserDto.email);
      if (isExits) {
        return WriteResponse(400, false, 'Email already exists.');
      }
      let ismobile = await this.userService.getUserByMobile(CreateUserDto.mobileNo);
      if (ismobile) {
        return WriteResponse(400, false, 'Mobile No. already exists.');
      }


      let user = await this.userService.Create(CreateUserDto);
      return {
        statusCode: 200,
        message: 'User registration successfully.',
        data: user.data,
      };
    } catch (e) {
      //console.log(e)
      throw new HttpException(
        {
          statusCode: 400,
          message: 'Something Went Wrong',
        },
        200,
      );
    }
  }

//User Update
  @Post('/Update-user')
  //@ApiBody({})
  async UpateUser(@Body(ValidationPipe) updateUserdto : UpdateUserdto ){
    try{

      let ismobile = await this.userService.getUserByMobile(updateUserdto.mobileNo);
      if (ismobile) {
 if(ismobile.id !== updateUserdto.id){
      return WriteResponse(400, false, 'Mobile No. already exists.');
  }}
      return await this.userService.UpdateUser(updateUserdto)
    }catch (e) {
      //console.log(e)
      throw new HttpException(
        {
          statusCode: 400,
          message: 'Something Went Wrong',
        },
        200,
      );
    }


  }


//User Login
  @Post('/login')
  async LogIn(@Body() data: LoginDTO) {
    let user = await this.userService.LogIn(data.email,data.password);
    console.log(user)
    if (!user) {
      return WriteResponse(401, data, 'invalid credentials');
    }
    const payload = {id:user.id};
    const token = {
      access_token: await this.jwtService.signAsync(payload),
    }
    return WriteResponse(200,{ token : token , id : user.id,userName:user.userName,email: user.email },"Login successfully.")

  }



  @Get('get-All')
  //@UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.userService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

//Reset Password
@Post('reset-password')
  async resetPassword(@Body() data: ResetPassDto) {
    return this.userService.resetPassword(data);
  }

  @Post('change-password')
  async changePassword(@Body() data: ChangePasswordDto, @Req() req: any) {
    return await this.userService.changePassword(req.User,data);
  }
//Forget Password
@Post('forget-password')
async forgetPassword(@Query() email: ForgetPassword, @Req() req: any) {
  return await this.userService.forgetPassword(email, req.get('host'));
}
//OTP Verify
@Post('verify')
  //@ApiBody({})
verifyOtp(@Body() verifyDto : VerifyDto ){
  return this.userService.verifyOtp(verifyDto.email , verifyDto.enteredOtp);
}


//@Post('verify')
//  //@ApiBody({})
//verifyOtp(@Body('email') email: string, @Body('otp') otp: string): boolean {
//  return this.userService.verifyOtp(email, otp);
//}

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

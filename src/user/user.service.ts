import { JwtService } from '@nestjs/jwt';
import { HttpException, Injectable, NotAcceptableException } from '@nestjs/common';
import { UpdateUserdto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { WriteResponse } from 'src/shared/response';
import { MailerService } from '@nestjs-modules/mailer';
import * as otpGenerator from 'otp-generator';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly mailerService:MailerService,
    private jwtService: JwtService,

  ) {}
  private otpStorage: { [key: string]: string } = {};

//User Create
  async Create(data: any): Promise<{ data: string }> {
    //let user = this.userRepository.create(data);
    //return await this.userRepository.save(user);
    const { userName, email, password , mobileNo } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      userName,
      email,
      password: hashedPassword,
      mobileNo
    });
    this.userRepository.save(user);
    const User = this.jwtService.sign({ id: user});

    return { data };
  }

  async getUser(query: object): Promise<User> {
    return this.userRepository.findOne(query);
  }

//User Update
async UpdateUser( updateUserdto : UpdateUserdto ) : Promise<any>{
  try{
    let Mlength = updateUserdto.mobileNo.length
    if(Mlength< 8 || Mlength > 14){
      return WriteResponse(400 , false , "Mobile Should be between 8 to 14")
    }
    if(updateUserdto.age < 14 ){
      return WriteResponse(400 , false , 'age must be greater then 14')
    }
    const user = await this.userRepository.findOne( {
      where : { id : updateUserdto.id , isDeleted : false}
    });

    if(!user){
        return WriteResponse(400 , false , 'No User Found with this id')
    }

   let x = await this.userRepository.save(updateUserdto)
   return WriteResponse(200 , x , "User Data Updated Succesfully")
  }catch(e){
    return WriteResponse(400 , false , e.mesaage)
  }
}


//User Login
  async LogIn(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: {email} });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if(!passwordValid){
      return passwordValid
    }
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return user;
  }


  //user Mobile exists
  async getUserByMobile(mobileNo: string): Promise<any> {
    return await this.userRepository.findOne({
      where:{mobileNo},

    });
  }
//User Email exists
  async getUserByEmail(email: string): Promise<any> {
    return await this.userRepository.findOne({
      where:{email},

    });
  }
//   async getUserByMobile(mobileNo: string): Promise<any> {
//     return await this.userRepository.findOne({
//       where:{mobileNo},
//
//     });
//   }




//GetAll
async findAll() {
  const User = await this.userRepository.find({
    where: { isDeleted: false},
  });
  if(User.length){

    return WriteResponse(
      200, User, 'User Found Successfully.'
    );
  }
  return WriteResponse(404, false, 'User Not Found.');

}


  //GetOne
 async findOne(id: number) {
  const User = await this.userRepository.findOne({
    where : { isDeleted: false, id: id},
  });
  if(User){
    User.password = '';
    return WriteResponse(200, User, 'User Found Successfully.');
  }
  return WriteResponse(404,false, 'User Not Found.');
}

//Reset Password
async resetPassword(data) {
  const User = await this.userRepository.findOne({where:{email :data.email}});
  if (User) {
    User.password = bcrypt.hashSync(data.new_password, 10);
    this.userRepository.save(User);
    return WriteResponse(200, {}, 'Password change successfully.');
  }
  throw new HttpException(
    {
      statusCode: 404,
      message: 'User does not exists.',
    },
    200,
  );
}

//Change Password
async changePassword(id, data,  ) {
  const User = await this.userRepository.findOne({where:{id:data.id}});
  if (bcrypt.compareSync(data.oldPassword, User.password)) {
    User.password = bcrypt.hashSync(data.newPassword, 10);
     this.userRepository.save(User);
     return WriteResponse(200, 'Password change successfully.');
  }
  throw new HttpException(
    {
      statusCode: 404,
      message: 'current password does not match',
    },
    200,
  );
}

//Forget Password
async forgetPassword(email, host) {
  try {
    //const otp = otpGenerator.generate(6, {
//
//      digits: true, alphabets: false, upperCase: false, specialChars: false
//
//    });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otpStorage[email.email] = otp;
    console.log(this.otpStorage)
    let check = await this.userRepository.findOne({
      where: { email: email.email, isDeleted: false },
    });
    if (check) {
      return this.mailerService
        .sendMail({
          to: email.email,
          from:'strangerpart128@gmail.com',
          subject: 'Forgot Password.',
          html: `
          Hi ${check.userName},
          >Forgot Password</a><br/><br/>
          Otp is :- ${otp}<br/>
          `,
          context: {
            username: 'ezpz',
          },
        })
        .then((res) => {
          console.log(res);
          return WriteResponse(
            200,
            {},
            'OTP share to your email address.',
          );
        })
        .catch((e) => WriteResponse(400, false, e.message));
    } else {
      return WriteResponse(203, false, 'Provided email does not exists.');
    }
  } catch (e) {
    return WriteResponse(400, false, e.message);
  }
}
//OTP Verify
verifyOtp(email: string, enteredOtp: string): any {
  const storedOtp = this.otpStorage[email];

  if(storedOtp === enteredOtp){
    return WriteResponse(200 , true , 'success')
  }else{
    return WriteResponse(400 ,false , "invalid otp")
  }
}
//Delete
async remove (id: number) {
  const User = await this.userRepository.delete({
         id: id, isDeleted: false
  });
  if(User.affected == 0){
    return WriteResponse(400, false, 'User Not found.');
  }
  return WriteResponse(200, true, 'User Deleted Successfully.');
}
}

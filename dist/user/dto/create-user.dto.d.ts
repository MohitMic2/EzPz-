export declare class CreateUserDto {
    userName: string;
    email: string;
    password: string;
    mobileNo: string;
}
export declare class UpdateUserdto {
    id: number;
    userName: string;
    mobileNo: string;
    age: number;
    gender: string;
    city: string;
}
export declare class LoginDTO {
    email: string;
    password: string;
}
export declare class ResetPassDto {
    email: string;
    new_password: string;
}
export declare class ChangePasswordDto {
    id: number;
    oldPassword: string;
    newPassword: string;
}
export declare class ForgetPassword {
    email: string;
}
export declare class VerifyDto {
    email: string;
    enteredOtp: string;
}

import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ErrorMessages } from "../../messages/error.messages";


export class CreateUserDto {
    @IsNotEmpty({ message:ErrorMessages.IsNotEmpty})
    @IsString({ message:ErrorMessages.IsString})
    username: string;
    @IsNotEmpty({ message:ErrorMessages.IsNotEmpty})
    @IsEmail({},{ message:ErrorMessages.IsEmail})
    email: string;
    @IsNotEmpty({ message:ErrorMessages.IsNotEmpty})
    @IsString({ message:ErrorMessages.IsString})
    password: string;
}

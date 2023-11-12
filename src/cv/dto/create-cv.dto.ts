import { IsNotEmpty, IsString } from "class-validator";
import { ErrorMessages } from "../../messages/error.messages";


export class CreateCvDto {
    @IsNotEmpty({message:ErrorMessages.IsNotEmpty})
    @IsString({message:ErrorMessages.IsString})
    name:string;
    @IsNotEmpty({message:ErrorMessages.IsNotEmpty})
    @IsString({message:ErrorMessages.IsString})
    firstname: string;
    @IsNotEmpty({message:ErrorMessages.IsNotEmpty})
    @IsString({message:ErrorMessages.IsString})
    age: number;
    @IsNotEmpty({message:ErrorMessages.IsNotEmpty})
    @IsString({message:ErrorMessages.IsString})
    cin: string;
    @IsString({message:ErrorMessages.IsString})
    job:string;
    @IsString({message:ErrorMessages.IsString})
    path:string;
}

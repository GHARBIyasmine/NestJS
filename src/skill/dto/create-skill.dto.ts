import { IsNotEmpty, IsString } from "class-validator";
import { ErrorMessages } from "../../messages/error.messages";


export class CreateSkillDto {
    @IsNotEmpty({message:ErrorMessages.IsNotEmpty})
    @IsString()
    designation: string;    
}

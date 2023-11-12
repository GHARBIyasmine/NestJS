

import { ErrorMessages } from "../../messages/error.messages";
import {TodoStatusEnum} from "../entities/todo.entity/TodoStatusEnum";
import {
    IsEnum,
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength
} from "class-validator";

export class addTodoDto{

    @IsNotEmpty({
        message : ErrorMessages.IsNotEmpty
    })
    @IsString({
        message : ErrorMessages.IsString
    })
    @MinLength(3, {
        message : ErrorMessages.NameMinLength
    })
    @MaxLength(15,{
        message : ErrorMessages.NameMaxLength
    })
    name : string;

    @IsNotEmpty({
        message : ErrorMessages.IsNotEmpty
    })
    @IsString({
        message : ErrorMessages.IsString
    })
    @MinLength(10, {
        message: ErrorMessages.DescriptionMinLength
    })
    description : string;

    @IsOptional()
    @IsEnum(TodoStatusEnum,{
        message : ErrorMessages.IsEnum
    })
    status : TodoStatusEnum
}
import { PartialType } from "@nestjs/mapped-types";
import {TodoStatusEnum} from "../entities/todo.entity/TodoStatusEnum";
import {
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength
} from "class-validator";
import { addTodoDto } from "./add-todo.dto";

export class updateTodoDto extends PartialType(addTodoDto){

    @IsOptional()
    @IsString({
        message : 'name must be string'
    })
    @MinLength(3, {
        message : 'name must be at least 3 characters'
    })
    @MaxLength(10,{
        message : 'name must be not exceed 10 characters'
    })
    name : string;

    @IsOptional()
    @IsString({
        message : 'description must be string'
    })
    @MinLength(10)
    description : string;

    @IsOptional()
    @IsIn(['active','waiting','done'],{
        message : 'status must be either : active, waiting or done'
    })
    status : TodoStatusEnum
}
import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req} from '@nestjs/common';
import {addTodoDto} from "./dto/add-todo.dto";
import {TodoService} from "./todo.service";
import {TodoEntity} from "./entities/todo.entity/todo.entity";
import {updateTodoDto} from "./dto/update-todo.dto";

@Controller('todo')
export class TodoController {
    constructor(private todoService : TodoService) {
    }
    //stats todo number by status
    @Get('stats')
    async statsTodoNumberByStatus(){
        return this.todoService.statsTodoNumberByStatus();
    }
    //restore soft delete
    @Get('restore/:id')
    async restore(
        @Param('id', ParseIntPipe) id : number
    ){
        return await this.todoService.restore(id);
    }

    //get by id
    @Get(':id')
    async getTodoById(
        @Param('id', ParseIntPipe) id : number
    ):Promise<TodoEntity>{
        return await this.todoService.getById(id);
    }
    //get all
    @Get()
    async getAllTodo(@Query('search') search?: string, @Query('status') status?: string, @Query('limit') limit?:number, @Query('offset') offset?:number):Promise<TodoEntity[]>{
        return await this.todoService.getAllTodo(search, status, limit, offset);
    }

    //add new todo
    @Post()
    async addTodo(
        @Req() req: any,
        @Body() addTodoDto : addTodoDto
    ):Promise<TodoEntity>{
        const userId = req.userId;
        return await this.todoService.addTodo(addTodoDto, userId);
    }

    //update a todo
    @Patch(':id')
    async updateTodo(
        @Req() req: any,
        @Body() updateTodoDto : updateTodoDto,
        @Param('id', ParseIntPipe) id : number
    ):Promise<TodoEntity>{
        const userId = req.userId;
        return await this.todoService.updateTodo(id, updateTodoDto, userId);
    }

    //delete a todo
    @Delete('delete/:id')
    async deleteTodo(
        @Req() req: any,
        @Param('id', ParseIntPipe) id : number
    ){
        const userId = req.userId;
        return await this.todoService.deleteTodo(id, userId);
    }

    //soft delete
    @Delete('softdelete/:id')
    async softDeleteTodo(
        @Param('id', ParseIntPipe) id : number
    ){
        return await this.todoService.softDeleteTodo(id);
    }


}

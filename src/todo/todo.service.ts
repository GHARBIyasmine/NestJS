import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TodoEntity} from "./entities/todo.entity/todo.entity";
import {Repository} from "typeorm";
import {addTodoDto} from "./dto/add-todo.dto";
import {updateTodoDto} from "./dto/update-todo.dto";


@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository : Repository<TodoEntity>
    ) {
    }
    // get all
    async getAllTodo(search?: string, status?: string, limit?: number, offset?: number):Promise<TodoEntity[]>{
        const query = this.todoRepository.createQueryBuilder('todo');

        if (search) {
            query.where('todo.name LIKE :search OR todo.description LIKE :search', {
                search: `%${search}%`,
            });
        }

        if (status) {
            query.andWhere('todo.status = :status', { status });
        }
        if (limit) {
            query.take(limit);
        }
    
        if (offset) {
            query.skip(offset);
        }
        return query.getMany();

       // return await this.todoRepository.find();
    }
    //get by id
    async getById(id :number):Promise<TodoEntity>{
        const todo = await this.todoRepository.findOne({where : {id}})
        if (! todo){
            throw new NotFoundException(`the id ${id} does not exist`)
        }
        return todo
    }

    // add new todo
    async addTodo(newtodo : addTodoDto, userId:number): Promise<TodoEntity>{
        const todo={
            userId,
            ...newtodo
        };
        return await this.todoRepository.save(todo);

    }
    // update todo by id
    async updateTodo(id : number,todo : updateTodoDto, userId:number): Promise<TodoEntity> {

        const newtodo = await this.todoRepository.preload({
            id,
            ...todo
        })
        if (! newtodo){
            throw new NotFoundException(`the id ${id} does not exist`);
        }
        if (newtodo.userId !== userId) {
            throw new UnauthorizedException(`Unauthorized. User ${userId} cannot modify this Todo ${id}.`)
            
          }
        return await this.todoRepository.save(newtodo);
    }

    //delete todo by id
    async deleteTodo(id : number, userId:number){
        const todo = await this.getById(id);
        if ( todo.userId !== userId) {
            throw new UnauthorizedException(`Unauthorized. User ${userId} cannot delete this Todo ${id}.`)
            
          }
        return await this.todoRepository.delete(id);
    }


    //soft delete by id
    async softDeleteTodo(id :number){
        return await this.todoRepository.softDelete(id);
    }

    //restore softDelete todo
    async restore(id : number){
        return await this.todoRepository.restore(id);
    }

    //stats by status
    async statsTodoNumberByStatus(){
        const qb= this.todoRepository.createQueryBuilder('todo');
        return await qb.select('todo.status, count(todo.id)')
            .groupBy('todo.status')
            .getRawMany();
    }
}

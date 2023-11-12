import {TodoStatusEnum} from "./TodoStatusEnum";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Timestampentity} from "../../../Generics/timestampentity";

@Entity('todo')
export class TodoEntity extends Timestampentity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column()
    userId: number;   

    @Column()
    status : TodoStatusEnum


}

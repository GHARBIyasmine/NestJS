
import {Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from 'typeorm';
import { CvEntity } from '../../cv/entities/cv.entity';
@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length:50, unique: true})
    username: string;
    @Column()
    email: string;
    @Column()
    password:string;
    @OneToMany(() => CvEntity, cv => cv.user,{
        cascade:true,
        nullable : true
    })
    cvs: CvEntity[];
}

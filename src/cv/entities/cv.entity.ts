

import {Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable, ManyToOne} from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';
@Entity('cv')
export class CvEntity {

    @PrimaryGeneratedColumn()
id: number;
@Column({length:50, unique: true})
name: string;
@Column()
firstname: string;
@Column()
age:number;
@Column()
cin:number;
@Column()
job:string;
@Column()
path:string;

@ManyToOne(() => UserEntity, user => user.cvs)
  user: UserEntity;

  @ManyToMany(() => SkillEntity)
  @JoinTable()
  skills: SkillEntity[];
}

import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

import { SkillEntity } from './entities/skill.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as falso from '@ngneat/falso';
import { CrudService } from '../common/crud.service';
import { async } from 'rxjs';

@Injectable()
export class SkillService extends CrudService<SkillEntity> {
  constructor(
    @InjectRepository(SkillEntity)
    private skillRepository: Repository<SkillEntity>,
  ) {
    super(skillRepository);
  }
  // async seedDataSkill(){
  // const skillsData = Array(10) 
  //     .fill(null)
  //     .map(async () => {
  //       const skill = new SkillEntity();
  //       skill.designation = falso.randJobTitle();
  //       return await this.skillRepository.save(skill);
  //     });
  //     await Promise.all(skillsData);
      
  //   }  
}

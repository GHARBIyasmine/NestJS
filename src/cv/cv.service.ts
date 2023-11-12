import { Injectable } from '@nestjs/common';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import * as falso from '@ngneat/falso';
import { CvEntity } from './entities/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud.service';

@Injectable()
export class CvService extends CrudService<CvEntity> {
  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>,
  ){
    
      super(cvRepository);
    
  }
  

  // async seedDataCv() {
  //   const cvData = Array(100)
  //     .fill(null)
  //     .map(async () => {
  //       const cv = new CvEntity();
  //       cv.name = falso.randLastName();
  //       cv.firstname = falso.randFirstName();
  //       cv.age = falso.randNumber({ min: 18, max: 60 });
  //       cv.cin = falso.randNumber() ;
  //       cv.job = falso.randJobTitle();
  //       cv.path = falso.randUrl();
  //       //return await this.cvRepository.save(cv); // Added await here
  //     });
  
  //   // Wait for all promises to resolve before continuing
  //   await Promise.all(cvData);
    
  // }
  
}

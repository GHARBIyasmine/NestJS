import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as falso from '@ngneat/falso';

import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud.service';
import { async } from 'rxjs';

@Injectable()
export class UserService extends CrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
//   async seedDataUser(nb : number){
//     const usersData = Array(nb) 
//     .fill(null)
//     .map(async () => {
//       const user = new UserEntity();
//       user.username = falso.randUserName();
//       user.email = falso.randEmail();
//       user.password = falso.randPassword();
      
//       return await this.userRepository.save(user);
//     });
//     await Promise.all(usersData);
    
// }
}
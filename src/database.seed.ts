import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SkillService } from './skill/skill.service';
import { UserService } from './user/user.service';
import { CvService } from './cv/cv.service';
import * as falso from '@ngneat/falso';
import { CvEntity } from './cv/entities/cv.entity';
import { UserEntity } from './user/entities/user.entity';
import { SkillEntity } from './skill/entities/skill.entity';


async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const skillService = app.get(SkillService);
  const userService = app.get(UserService);
  const cvService = app.get(CvService);
  let userArray = [];
  let skillArray=[]
  


    for (let i =0; i<20 ; i++) {
    
        const user = new UserEntity();
        user.username = falso.randUserName();
        user.email = falso.randEmail();
        user.password = falso.randPassword();

        let newuser = await userService.create(user);
        userArray.push(newuser)
    
  }
    for (let k =0; k<20; k++){
    const skill = new SkillEntity();
        skill.designation = falso.randJobTitle();
        
        let newskill=await skillService.create(skill);
        skillArray.push(newskill)
  }
  let cvSkills=skillArray.slice(0,3);
  for (let j = 0; j <20 ; j++){
    const cv = new CvEntity();
    cv.name = falso.randLastName();
    cv.firstname = falso.randFirstName();
    cv.age = falso.randNumber({ min: 18, max: 60 });
    cv.cin = falso.randNumber() ;
    cv.job = falso.randJobTitle();
    cv.path = falso.randUrl();
    cv.user=userArray[j];
    cv.skills=cvSkills;
    await cvService.create(cv); // Added await here
    
}
  await app.close();
}
bootstrap();
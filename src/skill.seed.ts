import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SkillService } from './skill/skill.service';


async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const skillService = app.get(SkillService);
  //await skillService.seedDataSkill();
  await app.close();
}
bootstrap();
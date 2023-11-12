import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CvService } from './cv/cv.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const cvService = app.get(CvService);
  //await cvService.seedDataCv();
  await app.close();
}
bootstrap();
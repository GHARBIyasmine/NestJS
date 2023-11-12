import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoEntity} from "./todo/entities/todo.entity/todo.entity";
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { TodoController } from './todo/todo.controller';
import { CvModule } from './cv/cv.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { CvEntity } from './cv/entities/cv.entity';
import { UserEntity } from './user/entities/user.entity';
import { SkillEntity } from './skill/entities/skill.entity';

@Module({
  imports: [CommonModule,
            TestModule,
            TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'nest_rt4',
      entities: [TodoEntity, CvEntity, UserEntity, SkillEntity],
      synchronize: true,
      logging: true,
    }),
    CvModule,
    SkillModule,
    UserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) : MiddlewareConsumer | void {
    consumer.apply(AuthMiddleware)
            .forRoutes(TodoController);
  }
  
}

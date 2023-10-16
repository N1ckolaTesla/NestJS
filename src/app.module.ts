import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './products/things.module';

@Module({
  imports: [ //импортируем тут модули, всё как в angular
    MongooseModule.forRoot('mongodb+srv://N1colaTesla:nsmtM9H8LmtQUwzc@atlascluster.g5oscpc.mongodb.net/'),
    ThingsModule
  ], 
  controllers: [AppController], //контроллеры импортируются в controllers
  providers: [AppService], //сервисы импортируются в providers
})
export class AppModule {}

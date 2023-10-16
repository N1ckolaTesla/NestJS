import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule], //импортируем тут модули, всё как в angular
  controllers: [AppController], //контроллеры импортируются в controllers
  providers: [AppService], //сервисы импортируются в providers
})
export class AppModule {}

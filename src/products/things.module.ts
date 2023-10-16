import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from "./things.service";
import { ProductsController } from "./things.controller";
import { Thing, ThingSchema } from "./schemas/thing.schema";

@Module({
    providers: [ProductsService],
    controllers: [ProductsController],
    imports: [
        MongooseModule.forFeature([ //используем forFeature вместо forRoot, потому что находимся в не в корневом модуле
            {name: Thing.name, schema: ThingSchema}
        ])
    ]
})

export class ThingsModule {

}
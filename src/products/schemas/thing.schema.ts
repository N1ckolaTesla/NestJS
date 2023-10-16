import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument  } from "mongoose";

export type ThingDocument = HydratedDocument<Thing> //этот экспорт определяет тип документа MongoDB для продукта
//Тип ProductDocument будет представлять документ продукта, который будет иметь поля, определенные в схеме ProductSchema

@Schema() //тут создаём схему (интерфейс продукта)
export class Thing {
    @Prop()
    title: string

    @Prop()
    price: number
}

export const ThingSchema = SchemaFactory.createForClass(Thing)//тут происходит следующее:
//SchemaFactory.createForClass(Product) берет класс Product, создаёт экземпляр схемы и экспортирует экземпляр
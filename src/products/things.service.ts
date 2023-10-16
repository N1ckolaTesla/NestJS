import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { Thing, ThingDocument } from "./schemas/thing.schema";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService { //сервисы выполняет всю логическую составляющую

    constructor(@InjectModel(Thing.name) private productModel: Model<ThingDocument>) {}//Инджектируем нашу модель в конструктор

    
    async getAll(): Promise <Thing[]> {
        return this.productModel.find().exec()
    }

    async getById(id: string): Promise <Thing> {
        return this.productModel.findById(id)
    }

    async create(productDto: CreateProductDto): Promise <Thing> {
        const newProduct = new this.productModel(productDto)
        return newProduct.save()
    }

    async remove(id: string): Promise <Thing> {
        return this.productModel.findByIdAndRemove(id)
    }

    async update(id: string, productDto: UpdateProductDto): Promise <Thing> {
        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})//{new: true} означает, что если элемент с таким id не найден, мы создаём новый элемент
    }
}
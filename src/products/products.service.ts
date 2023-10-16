import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService { //сервисы выполняет всю логическую составляющую
    private products = []
    
    getAll() {
        return this.products
    }

    getById(id: string) {
        return this.products.find(p => p.id === id)
    }

    create(productDto: CreateProductDto) {
        return this.products.push({
            ...productDto,
            id: Date.now().toString()    
        })
    }
}
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

    @Get()
    getAll(): string {
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param('id') id: string): string { //@Param() считывает параметр id
        return 'getOne ' + id
    }

    @Post()
    create(@Body() createProductDto: CreateProductDto) { //@Body() считывает передаваемый body. DTO - обычный интерфейс (data transfer object)
        return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
    }

    @Delete(':id') 
    remove(@Param('id') id: string) { 
        return 'Remove ' + id
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return 'Update ' + id
    }

}

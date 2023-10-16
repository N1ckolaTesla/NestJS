import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products') //Контроллеры работают с запросами, параметрами и т.д.
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {} //работаем с сервисами как в angular

    @Get()
    //@Redirect('https://google.com', 301) //можно сделать редирект
    getAll() {
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): string { //@Param() считывает параметр id
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED) //это вместо res.status(201)
    @Header('Cache-Control', 'none') //Можно добавлять хэдеры
    create(@Body() createProductDto: CreateProductDto) { //@Body() считывает передаваемый body. DTO - обычный интерфейс (data transfer object)
        return this.productsService.create(createProductDto)
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

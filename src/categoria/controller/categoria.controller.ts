import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";

@Controller('/categoria')
export class categoriaController {
    categoriaService: any;
    constructor(private readonly temaService: CategoriaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id)
    }

    @Get('/genero/:genero')
    @HttpCode(HttpStatus.OK)
    findByGenero(@Param('Genero') genero: string): Promise<Categoria[]> {
        return this.categoriaService.findByDescricao(genero)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tema: Categoria): Promise<Categoria> {
        return this.categoriaService.create(Categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() tema: Categoria): Promise<Categoria> {
        return this.categoriaService.update(Categoria)
    }
    
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    Delete(@Param('id', ParseIntPipe) id: number){ 
        return this.categoriaService.Delete(id)
    }

}
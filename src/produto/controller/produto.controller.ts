import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";

@Controller('/produto')
export class produtoController {
    categoriaService: any;
    constructor(private readonly ProdutoService: ProdutoService){ } 

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.ProdutoService.findAll();
    }


    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.ProdutoService.findById(id)
    }

    @Get('/jogo/:jogo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('jogo') produto: string): Promise<Produto[]> {
        return this.ProdutoService.findByTitulo(produto)
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto>{
        return this.ProdutoService.create(produto)
    }



    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto>{
        return this.ProdutoService.update(produto)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.ProdutoService.delete(id)
    }

}

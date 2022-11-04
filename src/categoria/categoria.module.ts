import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { categoriaController } from "./controller/categoria.controller";
import { Categoria } from "./entities/categoria.entity";

@Module ({
    imports:[TypeOrmModule.forFeature([Categoria])],
    providers: [CategoriaService],
    controllers:[categoriaController], 
    exports: [TypeOrmModule]


})

export class CategoriaModule { }
    
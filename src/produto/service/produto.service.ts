import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Produto } from "../entities/produto.entity"

//postagem/produto 
//tema/categoria 

@Injectable()

export class PostagemService {

    constructor(
        @InjectRepository(Produto)
        private ProdutoRepository: Repository<Produto>
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.ProdutoRepository.find({
            relations: {
                categoria:  true
            }
        })
    }


    async findById(id: number): Promise<Produto> {

        let postagem = await this.ProdutoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        })

        if (!postagem)
            throw new HttpException('Postagem não existe', HttpStatus.NOT_FOUND)

        return postagem
    }

    async findByTitulo(titulo: string): Promise<Produto[]> {
        return await this.ProdutoRepository.find({
            where: {
                jogo: ILike(`%${titulo}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(postagem: Postagem): Promise<Postagem>{
        return await this.PostagemRepository.save(postagem)
    }

    async update(postagem: Postagem): Promise<Postagem> {
        let buscarPostagem = await this.findById(postagem.id)

        if(!buscarPostagem || !postagem.id)
            throw new HttpException('Postagem Não Existe', HttpStatus.NOT_FOUND)

            return await this.PostagemRepository.save(postagem)
    }


    async delete(id: number): Promise<DeleteResult> {
        let buscarPostagem = await this.findById(id)

        if(!buscarPostagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)

        return await this.PostagemRepository.delete(id)
    }
    


}

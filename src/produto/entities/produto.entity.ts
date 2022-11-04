import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 100, nullable: false})
    jogo: string //nome

    @IsNotEmpty()
    @MaxLength(100) 
    @Column ({ type: 'decimal', precision: 5, scale: 2, default: 0, nullable: false})
    preço: number
}
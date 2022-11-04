import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name:"tb_categoria"}) /*o nome da tabela é o nome da pasta em que ela está contida*/
 export class Categoria{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100,nullable: false})
    genero: string //ação aventura infantil luta

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100,nullable: false})
    faixaEtaria: string 

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100,nullable: false})
    tipo: string  //baralho,on-line...

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100,nullable: false})
    dificuldade: string
    
 }
/* A parte do OneToMany e ManyToMany é feito somente no final de tudo.
@OneToMany(() => Postagem, (Postagem) => Postagem.id)
postagem: Postagem[]
}*/
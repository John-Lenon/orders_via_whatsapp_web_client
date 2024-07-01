import { BaseModel } from "src/app/shared/models/baseDTO"
import { EnumStatusProduto } from "../enumeradores/enum-status-produto"

export class Produto extends BaseModel {
    codigo?: string;
    prioridade?: number;
    status?: EnumStatusProduto;
    preco?: number; 
    descricao?: string;
    nome?: string; 
    caminhoImagem?: string

    constructor(codigo?: string, prioridade?: number, status?: EnumStatusProduto, preco?: number, descricao?: string, nome?: string, caminhoImagem?: string){
        super();
        this.codigo = codigo;
        this.prioridade = prioridade;
        this.status = status;
        this.preco = preco;
        this.descricao = descricao;
        this.nome = nome;
        this.caminhoImagem = caminhoImagem;
    }
}

export class ProdutoFilter {
    preco?: number; 
    nome?: string;
    caminhoImagem?: string;
    status?: number;

    constructor(preco?: number, nome?: string, caminhoImagem?: string, status?: number){
        this.preco = preco;
        this.nome = nome;
        this.caminhoImagem = caminhoImagem;
        this.status = status;
    }
}
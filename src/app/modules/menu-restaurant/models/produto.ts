import { BaseModel } from 'src/app/shared/models/baseDTO';
import { EnumStatusProduto } from '../enums/enum-status-produto';

export interface Produto extends BaseModel {
  codigo?: string;
  prioridade?: number;
  status?: EnumStatusProduto;
  preco?: number;
  descricao?: string;
  nome?: string;
  caminhoImagem?: string;
}

export interface ProdutoFilter {
  preco?: number;
  nome?: string;
  caminhoImagem?: string;
  status?: number;
}

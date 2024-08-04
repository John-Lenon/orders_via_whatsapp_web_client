import { EnumStatusFuncionamento } from '../enums/enum-status-funcionamento';
import { HorarioFuncionamento } from './horario-funcionamento';

export interface Empresa {
  nomeFantasia?: string;
  razaoSocial?: string;
  cnpj?: string;
  numeroDoWhatsapp?: string;
  email?: string;
  dominio?: string;
  enderecoDoLogotipo?: string;
  EnderecoDaCapaDeFundo?: string;
  statusDeFuncionamento?: EnumStatusFuncionamento;
  HorariosDeFuncionamento?: HorarioFuncionamento[];
}

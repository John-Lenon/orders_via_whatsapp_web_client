import { EnumStatusFuncionamento } from '../../menu-restaurant/enums/enum-status-funcionamento';
import { HorarioFuncionamento } from '../../menu-restaurant/models/horario-funcionamento';

export interface Empresa {
  codigo: string;
  nomeFantasia?: string;
  razaoSocial?: string;
  cnpj?: string;
  dominio?: string;
  numeroDoWhatsapp?: string;
  email?: string;
  statusDeFuncionamento?: EnumStatusFuncionamento;
  HorariosDeFuncionamento?: HorarioFuncionamento[];
}

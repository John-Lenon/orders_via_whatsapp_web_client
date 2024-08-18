import { EnumDiaSemana } from '../enums/enum-dia-semana';

export interface HorarioFuncionamento {
  Hora: Number;
  Minutos: Number;
  DiaSemana: EnumDiaSemana;
}

import { CustomErrorStateMatcher } from "../../utils/custom-error-state-matcher";

export class InputBase {
    matcher!: CustomErrorStateMatcher;
    mensagemErroAtual: string = '';
    mensagemErroAplicada: string = '';

  onFocusout(): void {
    if(this.mensagemErroAtual)
      this.mensagemErroAplicada = this.mensagemErroAtual;
    else 
      this.mensagemErroAplicada = '';
  }

  onFocusin() : void {
    this.mensagemErroAplicada = '';
  }

}
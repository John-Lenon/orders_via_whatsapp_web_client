import { ErrorStateMatcher } from "@angular/material/core";
import { FormControlConfig } from "../components/base/form-base";
import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { InputBase } from "../components/base/input-base";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  
    constructor(private formControlConfig: FormControlConfig, private component: InputBase) { }
  
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      if(!this.formControlConfig.mensagens) return false;
      const isSubmitted = form && form.submitted;
      
      if(control && control.invalid && (control.dirty || control.touched || isSubmitted) ){
        const chavesMensagensErros = Object.keys(this.formControlConfig.mensagens);
        const errosAplicados = Object.keys(control.errors ?? {});
        
        for(let chaveErro of chavesMensagensErros){
          if(chaveErro === 'required' && errosAplicados && errosAplicados.length > 1) continue;
          
          if(control.errors && control.errors[chaveErro]){
            this.component.mensagemErroAtual = this.formControlConfig.mensagens[chaveErro];
            break;
          }
        }

        return true;
      }
      else {
        this.component.mensagemErroAtual = '';
        return false;
      }
    }
  }
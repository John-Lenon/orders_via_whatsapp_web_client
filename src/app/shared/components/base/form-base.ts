import { inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms"
import { HttpClientService } from "src/app/core/services/http-client.service";

export class FormBase {
    formulario?: FormGroup;
    controlesFormulario: any;
    httpService: HttpClientService = inject(HttpClientService);
    protected fb: FormBuilder = inject(FormBuilder);

    protected iniciarFormulario(configsControles: any) {                    
        for(let nomeCampo of Object.keys(configsControles)){
           this.formulario?.addControl(nomeCampo, configsControles[nomeCampo].controle);
        }
    };

    protected getFormData<TModel>() : TModel {
        const keys = Object.keys(this.controlesFormulario);
        const instanceAsResult: any = { };
        for(let key of keys){
            instanceAsResult[key] = this.controlesFormulario[key].controle.value;
        }
        return <TModel>instanceAsResult;
    }
}

export interface FormControlConfig {
    controle: FormControl;
    mensagens: any;
    mensagemErroAplicada: string | null | undefined;
}

export class ValidatorConfig {
    nomeValidacao!: string;
    mensagem!: string;
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from 'src/app/core/http/http-response';
import { HttpClientService } from 'src/app/core/services/http-client.service';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private httpClientService: HttpClientService) {}

  public getCapaEmpresa(cnpj: string): Observable<Blob> {
    const path = `empresa/get-capa-empresa?cnpj=${cnpj}`;
    return this.httpClientService.getImage(path);
  }

  public getLogoEmpresa(cnpj: string): Observable<Blob> {
    const path = `empresa/get-logo-empresa?cnpj=${cnpj}`;
    return this.httpClientService.getImage(path);
  }

  public uploadCapaEmpresa(
    cnpj: string,
    file: File
  ): Observable<HttpResponse<boolean>> {
    const path = `empresa/upload-capa-empresa?cnpj=${cnpj}`;
    return this.httpClientService.uploadImage(file, path);
  }

  public uploadLogoEmpresa(
    cnpj: string,
    file: File
  ): Observable<HttpResponse<boolean>> {
    const path = `empresa/upload-logo-empresa?cnpj=${cnpj}`;
    return this.httpClientService.uploadImage(file, path);
  }
}

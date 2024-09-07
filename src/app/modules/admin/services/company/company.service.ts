import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from 'src/app/core/http/http-response';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { Company } from '../../model/company.interface';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  constructor(private httpClientService: HttpClientService) {}

  //#region Company
  public getCompany(): Observable<HttpResponse<Company>> {
    console.log('chamdo');
    return this.httpClientService.get<Company>('empresa');
  }

  public updateCompany(codigo: string, company: Company) {
    const path = `empresa/${codigo}`;
    this.httpClientService.update(codigo, path, company).subscribe();
  }

  //#endregion

  //#region Methods Images
  public getCapaEmpresa(): Observable<Blob> {
    const path = `empresa/get-capa-empresa`;
    return this.httpClientService.getImage(path);
  }

  public getLogoEmpresa(): Observable<Blob> {
    const path = `empresa/get-logo-empresa`;
    return this.httpClientService.getImage(path);
  }

  public uploadCapaEmpresa(file: File): Observable<HttpResponse<boolean>> {
    const path = `empresa/upload-capa-empresa`;
    return this.httpClientService.uploadImage(file, path);
  }

  public uploadLogoEmpresa(file: File): Observable<HttpResponse<boolean>> {
    const path = `empresa/upload-logo-empresa`;
    return this.httpClientService.uploadImage(file, path);
  }
  //#endregion
}

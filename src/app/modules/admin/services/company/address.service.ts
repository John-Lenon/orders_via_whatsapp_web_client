import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from 'src/app/core/http/http-response';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { Address } from '../../model/address.interface';

@Injectable({ providedIn: 'root' })
export class AddressService {
  constructor(private httpClientService: HttpClientService) {}

  public getAddress(): Observable<HttpResponse<Address>> {
    return this.httpClientService.get<Address>('endereco');
  }

  public updateAddress(codigo: string, address: Address) {
    const path = `endereco/ ${codigo}`;
    this.httpClientService.update(codigo, path, address).subscribe();
  }
}

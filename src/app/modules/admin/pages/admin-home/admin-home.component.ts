import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { Empresa } from 'src/app/modules/menu-restaurant/models/empresa';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  empresa: Empresa | null = null;

  constructor(private httpClient: HttpClientService) {}

  ngOnInit(): void {
    this.httpClient.get<Empresa>('empresa').subscribe((response) => {
      this.empresa = response.dados;
    });
  }
}

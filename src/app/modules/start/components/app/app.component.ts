import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { Produto } from 'src/app/modules/menu-restaurant/models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClientService) { }
  
  ngOnInit(): void {
    this.httpClient.get<Produto>('produto').subscribe(result => {
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { HttpClientService } from './services/http-client.service';

@NgModule({
  declarations: [
      
  ],
  exports: [], 
  providers: [
    HttpClientService, 
    { 
      provide:  HTTP_INTERCEPTORS,
      useClass: InterceptorService, 
      multi: true
    }
  ], 
  imports: [
    CommonModule, 
    HttpClientModule
  ]
})
export class CoreModule { }

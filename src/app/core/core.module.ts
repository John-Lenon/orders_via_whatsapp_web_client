import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { HttpClientService } from './services/http-client.service';

@NgModule({ declarations: [],
    exports: [], imports: [CommonModule], providers: [
        HttpClientService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class CoreModule { }

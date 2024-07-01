import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/modules/start/app.module';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

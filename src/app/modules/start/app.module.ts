import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { MenuRestaurantModule } from '../menu-restaurant/menu-restaurant.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { provideLottieOptions } from 'ngx-lottie';

import player from 'lottie-web';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // User Code
    AppRoutingModule,
    CoreModule,
    MenuRestaurantModule,

    // Material UI
    MatNativeDateModule,

    // Framework Code
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,

    SharedModule,
  ],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

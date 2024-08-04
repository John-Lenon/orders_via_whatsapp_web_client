import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuRestaurantComponent } from './pages/menu-restaurant/menu-restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: MenuRestaurantComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRestaurantRoutingModule {}

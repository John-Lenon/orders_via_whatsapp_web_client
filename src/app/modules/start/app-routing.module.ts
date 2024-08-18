import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { ComponentTestesComponent } from '../menu-restaurant/pages/component-testes/component-testes.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RoutePathStart } from './utils/route-path-stat';

const routes: Routes = [
  {
    path: RoutePathStart.EMPTY,
    loadChildren: () =>
      import('../menu-restaurant/menu-restaurant.module').then(
        (m) => m.MenuRestaurantModule
      ),
    pathMatch: 'full',
  },
  {
    path: RoutePathStart.ADMIN,
    canActivate: [authGuard],
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: RoutePathStart.AUTH,
    loadChildren: () =>
      import('../authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: 'testes', component: ComponentTestesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { ComponentTestesComponent } from '../menu-restaurant/pages/component-testes/component-testes.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../menu-restaurant/menu-restaurant.module').then(
        (m) => m.MenuRestaurantModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
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

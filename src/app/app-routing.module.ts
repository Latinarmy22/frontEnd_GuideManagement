import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'index',
    component: MainComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'guides',
    component: GuidesComponent
  },
  {
    path: 'prueba',
    component: UsersDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

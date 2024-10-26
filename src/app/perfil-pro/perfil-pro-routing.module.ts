import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilProPage } from './perfil-pro.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilProPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilProPageRoutingModule } from './perfil-pro-routing.module';

import { PerfilProPage } from './perfil-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilProPageRoutingModule
  ],
  declarations: [PerfilProPage]
})
export class PerfilProPageModule {}

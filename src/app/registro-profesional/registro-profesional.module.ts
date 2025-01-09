import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroProfesionalPageRoutingModule } from './registro-profesional-routing.module';

import { RegistroProfesionalPage } from './registro-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroProfesionalPageRoutingModule
  ],
  declarations: [RegistroProfesionalPage]
})
export class RegistroProfesionalPageModule {}

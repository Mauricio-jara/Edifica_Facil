import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-registro-profesional',
  templateUrl: './registro-profesional.page.html',
  styleUrls: ['./registro-profesional.page.scss'],
})
export class RegistroProfesionalPage implements OnInit {

  registerForm : FormGroup;

  constructor(
    private builder: FormBuilder,
  ) {this.registerForm = this.builder.group({
    "nombre": new FormControl("", [Validators.required, Validators.minLength(4)]),
    "correo": new FormControl("", [Validators.required, Validators.minLength(4)]),
    "contraseña": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "rcontraseña": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "role": new FormControl("", Validators.required),
  })}

  ngOnInit() {
  }
  register(){
    
  }
}

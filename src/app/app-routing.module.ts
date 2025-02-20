import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tipo-registro',
    loadChildren: () => import('./tipo-registro/tipo-registro.module').then( m => m.TipoRegistroPageModule)
  },
  {
    path: 'perfil-pro',
    loadChildren: () => import('./perfil-pro/perfil-pro.module').then( m => m.PerfilProPageModule)
  },
  {
    path: 'inicio-pro',
    loadChildren: () => import('./inicio-pro/inicio-pro.module').then( m => m.InicioProPageModule)
  },
  {
    path: 'registro-profesional',
    loadChildren: () => import('./registro-profesional/registro-profesional.module').then( m => m.RegistroProfesionalPageModule)
  },
  {
    path: 'trabajos',
    loadChildren: () => import('./trabajos/trabajos.module').then( m => m.TrabajosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

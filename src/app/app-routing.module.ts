import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionAplicacionesComponent } from './modules/pages/gestion-aplicaciones/gestion-aplicaciones.component';
import { GestionBannersComponent } from './modules/pages/gestion-banners/gestion-banners.component';
import { GestionCumpleaniosComponent } from './modules/pages/gestion-cumpleanios/gestion-cumpleanios.component';
import { GestionDirectorioTelefonicoComponent } from './modules/pages/gestion-directorio-telefonico/gestion-directorio-telefonico.component';
import { GestionDocumentosDigitalesComponent } from './modules/pages/gestion-documentos-digitales/gestion-documentos-digitales.component';
import { GestionEnlacesInteresComponent } from './modules/pages/gestion-enlaces-interes/gestion-enlaces-interes.component';
import { GestionMenuComponent } from './modules/pages/gestion-menu/gestion-menu.component';
import { GestionRolesComponent } from './modules/pages/gestion-roles/gestion-roles.component';
import { GestionTemasComponent } from './modules/pages/gestion-temas/gestion-temas.component';
import { GestionUsuariosComponent } from './modules/pages/gestion-usuarios/gestion-usuarios.component';
import { GestionVentanasEmergentesComponent } from './modules/pages/gestion-ventanas-emergentes/gestion-ventanas-emergentes.component';
import { PublicacionComponent } from './modules/pages/publicacion/publicacion.component';

const routes: Routes = [
  { path: '', redirectTo: 'gestion-menu', pathMatch: 'full' },
  { path: 'gestion-menu', component: GestionMenuComponent },
  { path: 'gestion-aplicaciones', component: GestionAplicacionesComponent },
  { path: 'gestion-roles', component: GestionRolesComponent },
  { path: 'gestion-usuarios', component: GestionUsuariosComponent },
  { path: 'publicacion', component: PublicacionComponent },
  { path: 'gestion-banners', component: GestionBannersComponent },
  {
    path: 'gestion-ventanas-emergentes',
    component: GestionVentanasEmergentesComponent,
  },
  {
    path: 'publicar-documentos-digitales',
    component: GestionDocumentosDigitalesComponent,
  },
  { path: 'gestion-temas', component: GestionTemasComponent },
  {
    path: 'gestion-enlaces-interes',
    component: GestionEnlacesInteresComponent,
  },
  {
    path: 'gestion-directorio-telefonico',
    component: GestionDirectorioTelefonicoComponent,
  },
  { path: 'gestion-cumpleanios', component: GestionCumpleaniosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonImportModule } from '../core/common-import.module';
import { GestionMenuComponent } from './pages/gestion-menu/gestion-menu.component';
import { GestionAplicacionesComponent } from './pages/gestion-aplicaciones/gestion-aplicaciones.component';
import { GestionRolesComponent } from './pages/gestion-roles/gestion-roles.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { GestionBannersComponent } from './pages/gestion-banners/gestion-banners.component';
import { GestionVentanasEmergentesComponent } from './pages/gestion-ventanas-emergentes/gestion-ventanas-emergentes.component';
import { GestionDocumentosDigitalesComponent } from './pages/gestion-documentos-digitales/gestion-documentos-digitales.component';
import { GestionTemasComponent } from './pages/gestion-temas/gestion-temas.component';
import { GestionEnlacesInteresComponent } from './pages/gestion-enlaces-interes/gestion-enlaces-interes.component';
import { GestionDirectorioTelefonicoComponent } from './pages/gestion-directorio-telefonico/gestion-directorio-telefonico.component';
import { GestionCumpleaniosComponent } from './pages/gestion-cumpleanios/gestion-cumpleanios.component';

const COMPONENTS = [
  ToolbarComponent,
  FooterComponent,
  SidebarComponent,
  GestionMenuComponent,
  GestionAplicacionesComponent,
  GestionRolesComponent,
  GestionUsuariosComponent,
  PublicacionComponent,
  GestionBannersComponent,
  GestionVentanasEmergentesComponent,
  GestionDocumentosDigitalesComponent,
  GestionTemasComponent,
  GestionEnlacesInteresComponent,
  GestionDirectorioTelefonicoComponent,
  GestionCumpleaniosComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonImportModule],
  exports: [...COMPONENTS],
})
export class ModulesModule {}

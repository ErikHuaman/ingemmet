import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionAplicacionesComponent } from './modules/pages/gestion-aplicaciones/gestion-aplicaciones.component';
import { GestionMenuComponent } from './modules/pages/gestion-menu/gestion-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'gestion-menu', pathMatch: 'full' },
  { path: 'gestion-menu', component: GestionMenuComponent },
  { path: 'gestion-aplicaciones', component: GestionAplicacionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

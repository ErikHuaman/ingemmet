import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMenuComponent } from './modules/pages/gestion-menu/gestion-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'gestion-menu', pathMatch: 'full' },
  { path: 'gestion-menu', component: GestionMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

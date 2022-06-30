import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/core/models';

@Component({
  selector: 'app-gestion-aplicaciones',
  templateUrl: './gestion-aplicaciones.component.html',
  styleUrls: ['./gestion-aplicaciones.component.scss'],
})
export class GestionAplicacionesComponent implements OnInit {
  title = 'Gestión de Aplicaciones';

  menu: MenuModel[] = [
    {
      orden: 2,
      nombre: 'Gestión de Roles',
      estado: 'Activo',
    },
    {
      orden: 9,
      nombre: 'Gestión de Temas',
      estado: 'Inactivo',
    },
  ];

  selectedTipo: any;

  checkedIntranet: boolean = false;

  checkedModel = [
    {
      label: 'Ver Intranet',
      checked: false,
    },
    {
      label: 'Activo',
      checked: false,
    },
    {
      label: 'Aplicación Frecuente',
      checked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

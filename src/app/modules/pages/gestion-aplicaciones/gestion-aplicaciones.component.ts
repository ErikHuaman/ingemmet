import { Component, OnInit } from '@angular/core';
import { AplicacionModel } from 'src/app/core/models';

@Component({
  selector: 'app-gestion-aplicaciones',
  templateUrl: './gestion-aplicaciones.component.html',
  styleUrls: ['./gestion-aplicaciones.component.scss'],
})
export class GestionAplicacionesComponent implements OnInit {
  title = 'Gestión de Aplicaciones';

  menu: AplicacionModel[] = [
    {
      orden: 2,
      nombre: 'Requerimiento de Software',
      estado: 'Activo',
    },
    {
      orden: 9,
      nombre: 'Lucha contra la corrupción',
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

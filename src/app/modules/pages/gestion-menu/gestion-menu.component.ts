import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/core/models';

@Component({
  selector: 'app-gestion-menu',
  templateUrl: './gestion-menu.component.html',
  styleUrls: ['./gestion-menu.component.scss'],
})
export class GestionMenuComponent implements OnInit {
  title = 'Gestión de Menú';

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

  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

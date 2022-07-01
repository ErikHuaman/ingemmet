import { Component, OnInit } from '@angular/core';
import { RolModel } from 'src/app/core/models';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.scss'],
})
export class GestionRolesComponent implements OnInit {
  title = 'Gestión de Roles';

  menu: RolModel[] = [
    {
      orden: 2,
      nombre: 'TI_administrador',
      estado: 'Activo',
    },
    {
      orden: 9,
      nombre: 'TI_consulta',
      estado: 'Inactivo',
    },
  ];

  selectedTipo: any;

  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

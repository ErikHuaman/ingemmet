import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/core/models';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss'],
})
export class GestionUsuariosComponent implements OnInit {
  title = 'Gestión de Roles';

  menu: UsuarioModel[] = [
    {
      orden: 2,
      perfil: 'TI_administrador',
      estado: 'Activo',
    },
    {
      orden: 9,
      perfil: 'TI_consulta',
      estado: 'Inactivo',
    },
  ];

  relacion = [
    {
      nombre: 'Manuel Salas',
      usuario: 'msalas',
      oficina: 'Tecnologías de la Información',
    },
    {
      nombre: 'Juan Pérez',
      usuario: 'jperez',
      oficina: 'Tecnologías de la Información',
    },
  ];

  selectedTipo: any;

  checked: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

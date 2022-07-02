import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { PublicacionModel } from 'src/app/core/models';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit, AfterViewInit {
  title = 'Gestión de Publicación';

  publicaciones: PublicacionModel[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const nav = document.querySelector('.p-tabview-nav-content');
    nav?.classList.add('d-flex');
    const search = document.createElement('div');
    search.classList.add(
      'w-50',
      'd-flex',
      'justify-content-center',
      'align-items-center'
    );
    search.setAttribute('style', 'border-bottom: 2px solid var(--primary);');
    search.innerHTML = ` <span class="p-input-icon-right w-100">
    <i class="pi pi-search"></i>
    <input placeholder='Buscar...' type="text" pInputText class='w-100 [(ngModel)]="value2" p-inputtext p-component p-element'/>
  </span>`;
    nav?.appendChild(search);
    this.renderer.listen(nav, 'click', (event) => {
      this.prueba();
    });
  }

  ngOnInit(): void {
    this.publicaciones = [
      {
        id: 1,
        titulo: 'Publicación 1',
        descripcion: 'Descripción de la publicación 1',
        creacion: '2020-01-01',
        portada: 'https://via.placeholder.com/100',
      },
      {
        id: 2,
        titulo: 'Publicación 2',
        descripcion: 'Descripción de la publicación 2',
        creacion: '2020-01-01',
        portada: 'https://via.placeholder.com/100',
      },
      {
        id: 3,
        titulo: 'Publicación 3',
        descripcion: 'Descripción de la publicación 3',
        creacion: '2020-01-01',
        portada: 'https://via.placeholder.com/100',
      },
    ];
  }

  prueba() {
    console.log('prueba');
  }
}

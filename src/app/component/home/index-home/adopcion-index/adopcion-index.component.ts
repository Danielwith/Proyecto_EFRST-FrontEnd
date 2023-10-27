import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface AnimalCarrousel {
  nombre: string;
  personalidad: string;
}

@Component({
  selector: 'app-adopcion-index',
  templateUrl: './adopcion-index.component.html',
  styleUrls: ['./adopcion-index.component.css'],
})
export class AdopcionIndexComponent {
  CARROUSEL_DATA: AnimalCarrousel[] = [
    { nombre: 'Alex', personalidad: 'Mucho amor' },
    { nombre: 'Beto', personalidad: 'Mucho cariño' },
    { nombre: 'Carlos', personalidad: 'Mucho afecto' },
    { nombre: 'Sara', personalidad: 'Mucha curiosidad' },
  ];

  configuracion: OwlOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      512: {
        items: 2,
      },
      768: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };
}

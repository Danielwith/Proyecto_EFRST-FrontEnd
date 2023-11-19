import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Pet } from 'src/app/model/pet.model';
import { DataService } from 'src/app/service/data.service';

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
  constructor(private data: DataService) {}

  CARROUSEL_DATA: Pet[] = this.data.getPet();

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

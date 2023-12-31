import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Donor } from 'src/app/model/donation.model';
import { DataService } from 'src/app/service/data.service';

interface AnimalCarrousel {
  nombre: string;
  personalidad: string;
}

@Component({
  selector: 'app-section-three-donation',
  templateUrl: './section-three-donation.component.html',
  styleUrls: ['./section-three-donation.component.css'],
})
export class SectionThreeDonationComponent {
  constructor(private data: DataService) {}

  CARROUSEL_DATA: Donor[] = this.data.getDonors();

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

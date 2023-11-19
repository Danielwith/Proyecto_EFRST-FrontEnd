import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Sponsor } from 'src/app/model/sponsor.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-patrocinador-index',
  templateUrl: './patrocinador-index.component.html',
  styleUrls: ['./patrocinador-index.component.css'],
})
export class PatrocinadorIndexComponent {
  constructor(private data: DataService) {}

  SPONSOR_DATA: Sponsor[] = this.data.getSponsors();

  configuracion: OwlOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: false,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      512: {
        items: 4,
      },
      768: {
        items: 6,
      },
      1200: {
        items: 7,
      },
    },
  };
}

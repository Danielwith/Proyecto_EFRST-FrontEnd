import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface Campaign {
  campaign_year: number;
  campaign_carrousel: CampaignCarrousel[];
}

interface CampaignCarrousel {
  id: number;
  campaign_name: string;
  campaign_date: Date;
  campaign_description: string;
  campaign_active: boolean;
}

@Component({
  selector: 'app-contenido-campaign',
  templateUrl: './contenido-campaign.component.html',
  styleUrls: ['./contenido-campaign.component.css'],
})
export class ContenidoCampaignComponent {
  @ViewChild('campaign_carrousel', { read: ElementRef }) carousel!: ElementRef;

  constructor(private snackBar: MatSnackBar) {}

  CARROUSEL_DATA_2022: CampaignCarrousel[] = [
    {
      id: 5,
      campaign_name: 'Campaña de Adopción de Primavera',
      campaign_date: new Date('2022-04-10'),
      campaign_description:
        'Celebra la llegada de la primavera adoptando a una nueva mascota. ¡Encuentra a tu compañero peludo!',
      campaign_active: false,
    },
    {
      id: 6,
      campaign_name: 'Campaña de Rescate de Animales Abandonados',
      campaign_date: new Date('2022-08-15'),
      campaign_description:
        'Ayuda a rescatar a animales abandonados y dales una segunda oportunidad en la vida.',
      campaign_active: false,
    },
    {
      id: 7,
      campaign_name: 'Campaña de Adopción de Verano',
      campaign_date: new Date('2022-06-20'),
      campaign_description:
        'Únete a nuestra campaña de adopción de verano y brinda un hogar a un amigo de cuatro patas.',
      campaign_active: false,
    },
  ];

  CARROUSEL_DATA_2023: CampaignCarrousel[] = [
    {
      id: 1,
      campaign_name: 'Campaña de Adopción de Verano',
      campaign_date: new Date('2023-06-15'),
      campaign_description:
        '¡Acompáñanos en nuestra campaña de adopción de verano y da un hogar a un amigo peludo!',
      campaign_active: false,
    },
    {
      id: 2,
      campaign_name: 'Campaña de Rescate de Invierno',
      campaign_date: new Date('2023-12-10'),
      campaign_description:
        'Ayúdanos a rescatar a animales necesitados durante el frío invierno. ¡Tu apoyo es esencial!',
      campaign_active: true,
    },
    {
      id: 3,
      campaign_name: 'Campaña de Cuidado de Mascotas Mayores',
      campaign_date: new Date('2023-08-20'),
      campaign_description:
        'Dediquemos nuestro amor y cuidado a las mascotas mayores. ¡Únete a nuestra campaña!',
      campaign_active: false,
    },

    {
      id: 4,
      campaign_name: 'Campaña de Adopción Especial',
      campaign_date: new Date('2023-09-25'),
      campaign_description:
        'Descubre a nuestras mascotas especiales que necesitan un hogar lleno de amor y atención.',
      campaign_active: false,
    },
  ];

  CAMPAIGN_DATA: Campaign[] = [
    {
      campaign_year: 2022,
      campaign_carrousel: this.CARROUSEL_DATA_2022,
    },
    {
      campaign_year: 2023,
      campaign_carrousel: this.CARROUSEL_DATA_2023,
    },
  ];

  configuracion: OwlOptions = {
    autoplay: true,
    smartSpeed: 1000,
    margin: 45,
    dots: false,
    loop: true,
    nav: false,
    items: 1,
  };

  scrollToCarrousel() {
    const element = this.carousel.nativeElement;
    const yPosition = element.getBoundingClientRect().top + window.scrollY - 30;
    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  }

  suscribeToCampaign() {
    this.snackBar.open('Gracias por tu interés!', 'OK', {
      duration: 4500,
    });
  }
}

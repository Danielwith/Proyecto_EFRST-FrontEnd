import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Campaign, CampaignCarrousel } from 'src/app/model/campaign.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-contenido-campaign',
  templateUrl: './contenido-campaign.component.html',
  styleUrls: ['./contenido-campaign.component.css'],
})
export class ContenidoCampaignComponent {
  @ViewChild('campaign_carrousel', { read: ElementRef }) carousel!: ElementRef;

  constructor(private snackBar: MatSnackBar, private data: DataService) {}

  CAMPAIGN_DATA = this.data.getCampaign();

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

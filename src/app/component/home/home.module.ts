import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { SharedModule } from '../shared/shared.module';
import { IndexHomeComponent } from './index-home/index-home.component';
import { HomeComponent } from './home.component';
import { BannerIndexComponent } from './index-home/banner-index/banner-index.component';
import { InfoIndexComponent } from './index-home/info-index/info-index.component';
import { ServicioIndexComponent } from './index-home/servicio-index/servicio-index.component';
import { HistoriasIndexComponent } from './index-home/historias-index/historias-index.component';
import { AdopcionIndexComponent } from './index-home/adopcion-index/adopcion-index.component';
import { DonacionIndexComponent } from './index-home/donacion-index/donacion-index.component';
import { PatrocinadorIndexComponent } from './index-home/patrocinador-index/patrocinador-index.component';
import { CampaignHomeComponent } from './campaign-home/campaign-home.component';
import { BannerCampaignComponent } from './campaign-home/banner-campaign/banner-campaign.component';
import { ContenidoCampaignComponent } from './campaign-home/contenido-campaign/contenido-campaign.component';
import { AdoptHomeComponent } from './adopt-home/adopt-home.component';
import { BannerAdoptComponent } from './adopt-home/banner-adopt/banner-adopt.component';
import { TablaAdoptComponent } from './adopt-home/tabla-adopt/tabla-adopt.component';
import { ModalAdoptComponent } from './adopt-home/modal-adopt/modal-adopt.component';

@NgModule({
  declarations: [
    NavHomeComponent,
    FooterHomeComponent,
    IndexHomeComponent,
    HomeComponent,
    BannerIndexComponent,
    InfoIndexComponent,
    ServicioIndexComponent,
    HistoriasIndexComponent,
    AdopcionIndexComponent,
    DonacionIndexComponent,
    PatrocinadorIndexComponent,
    CampaignHomeComponent,
    BannerCampaignComponent,
    ContenidoCampaignComponent,
    AdoptHomeComponent,
    BannerAdoptComponent,
    TablaAdoptComponent,
    ModalAdoptComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}

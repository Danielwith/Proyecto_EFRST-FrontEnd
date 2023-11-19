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
import { CompromiseHomeComponent } from './compromise-home/compromise-home.component';
import { ModalCompromiseComponent } from './compromise-home/modal-compromise/modal-compromise.component';
import { FaqHomeComponent } from './faq-home/faq-home.component';
import { DudasFaqComponent } from './faq-home/dudas-faq/dudas-faq.component';
import { FeedbackFaqComponent } from './faq-home/feedback-faq/feedback-faq.component';
import { ModalFaqComponent } from './faq-home/modal-faq/modal-faq.component';
import { DonationHomeComponent } from './donation-home/donation-home.component';
import { BannerDonationComponent } from './donation-home/banner-donation/banner-donation.component';
import { SectionOneDonationComponent } from './donation-home/section-one-donation/section-one-donation.component';
import { SectionTwoDonationComponent } from './donation-home/section-two-donation/section-two-donation.component';
import { SectionThreeDonationComponent } from './donation-home/section-three-donation/section-three-donation.component';
import { FormDonationComponent } from './donation-home/form-donation/form-donation.component';
import { FavouriteHomeComponent } from './favourite-home/favourite-home.component';
import { BannerFavouriteComponent } from './favourite-home/banner-favourite/banner-favourite.component';
import { TablaFavouriteComponent } from './favourite-home/tabla-favourite/tabla-favourite.component';
import { RedeemCodeHomeComponent } from './redeem-code-home/redeem-code-home.component';
import { BannerRedeemCodeComponent } from './redeem-code-home/banner-redeem-code/banner-redeem-code.component';
import { TablaRedeemCodeComponent } from './redeem-code-home/tabla-redeem-code/tabla-redeem-code.component';
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
    CompromiseHomeComponent,
    ModalCompromiseComponent,
    FaqHomeComponent,
    DudasFaqComponent,
    FeedbackFaqComponent,
    ModalFaqComponent,
    DonationHomeComponent,
    BannerDonationComponent,
    SectionOneDonationComponent,
    SectionTwoDonationComponent,
    SectionThreeDonationComponent,
    FormDonationComponent,
    FavouriteHomeComponent,
    BannerFavouriteComponent,
    TablaFavouriteComponent,
    RedeemCodeHomeComponent,
    BannerRedeemCodeComponent,
    TablaRedeemCodeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}

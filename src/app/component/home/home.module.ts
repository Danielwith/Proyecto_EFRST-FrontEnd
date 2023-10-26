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

@NgModule({
  declarations: [
    NavHomeComponent,
    FooterHomeComponent,
    IndexHomeComponent,
    HomeComponent,
    BannerIndexComponent,
    InfoIndexComponent,
    ServicioIndexComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}

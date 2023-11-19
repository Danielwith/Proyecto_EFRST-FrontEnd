import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexHomeComponent } from './index-home/index-home.component';
import { CampaignHomeComponent } from './campaign-home/campaign-home.component';
import { AdoptHomeComponent } from './adopt-home/adopt-home.component';
import { CompromiseHomeComponent } from './compromise-home/compromise-home.component';
import { FaqHomeComponent } from './faq-home/faq-home.component';
import { DonationHomeComponent } from './donation-home/donation-home.component';
import { FavouriteHomeComponent } from './favourite-home/favourite-home.component';
import { RedeemCodeHomeComponent } from './redeem-code-home/redeem-code-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexHomeComponent,
      },
      {
        path: 'campaign',
        component: CampaignHomeComponent,
      },
      {
        path: 'adopt',
        component: AdoptHomeComponent,
      },
      {
        path: 'compromise',
        component: CompromiseHomeComponent,
      },
      {
        path: 'faq',
        component: FaqHomeComponent,
      },
      {
        path: 'donation',
        component: DonationHomeComponent,
      },
      {
        path: 'favourite',
        component: FavouriteHomeComponent,
      },
      {
        path: 'codes',
        component: RedeemCodeHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

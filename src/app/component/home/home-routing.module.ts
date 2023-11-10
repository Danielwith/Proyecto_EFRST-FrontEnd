import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexHomeComponent } from './index-home/index-home.component';
import { CampaignHomeComponent } from './campaign-home/campaign-home.component';
import { AdoptHomeComponent } from './adopt-home/adopt-home.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

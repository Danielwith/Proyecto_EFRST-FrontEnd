import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.css'],
})
export class FooterHomeComponent {
  constructor(private data: DataService) {}

  CAMPAIGN_DATA = this.data.getCampaign();
}

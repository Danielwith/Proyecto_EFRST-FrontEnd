import { Component } from '@angular/core';
import { DonationStory } from 'src/app/model/donation.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-section-one-donation',
  templateUrl: './section-one-donation.component.html',
  styleUrls: ['./section-one-donation.component.css'],
})
export class SectionOneDonationComponent {
  constructor(private data: DataService) {}

  DONATION_DATA: DonationStory[] = this.data.getDonationStories();
}

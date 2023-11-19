import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-dudas-faq',
  templateUrl: './dudas-faq.component.html',
  styleUrls: ['./dudas-faq.component.css'],
})
export class DudasFaqComponent {
  constructor(private data: DataService) {}

  FAQ_DATA = this.data.getFAQ();
}

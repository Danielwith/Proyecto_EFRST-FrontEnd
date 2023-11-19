import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css'],
})
export class NavHomeComponent {
  constructor(private data: DataService) {}
}

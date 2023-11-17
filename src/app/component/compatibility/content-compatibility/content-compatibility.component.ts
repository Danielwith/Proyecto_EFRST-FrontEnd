import { Component } from '@angular/core';

@Component({
  selector: 'app-content-compatibility',
  templateUrl: './content-compatibility.component.html',
  styleUrls: ['./content-compatibility.component.css'],
})
export class ContentCompatibilityComponent {
  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}

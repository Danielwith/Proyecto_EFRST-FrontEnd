import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-content-compatibility',
  templateUrl: './content-compatibility.component.html',
  styleUrls: ['./content-compatibility.component.css'],
})
export class ContentCompatibilityComponent {
  @Output() emitChangeEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  answer!: string;
  answers: string[] = [];
  steps: number = 0;

  constructor(private data: DataService) {}

  COMPATIBILITY_DATA = this.data.getAppCompatibility()[0];

  nextStep() {
    if (this.steps < 4) {
      this.steps++;
      this.saveAnswer();
      this.COMPATIBILITY_DATA = this.data.getAppCompatibility()[this.steps];
    } else {
      this.emitChangeEvent.emit(true);
    }
  }

  saveAnswer() {
    this.answers.push(this.answer);
    this.answer = '';
  }
}

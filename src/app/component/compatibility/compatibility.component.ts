import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compatibility',
  templateUrl: './compatibility.component.html',
  styleUrls: ['./compatibility.component.css'],
})
export class CompatibilityComponent {
  execNextStep(value: boolean) {
    let into = document.getElementById('r');
    let out = document.getElementById('e');
    if (into !== null && out !== null) {
      out.className = 'animate__animated animate__fadeOut animate__fast';
      setTimeout(() => {
        if (out !== null) out.className = 'd-none';
        if (into !== null)
          into.className = 'd-block animate__animated animate__bounceIn';
      }, 800);
    }
  }
}

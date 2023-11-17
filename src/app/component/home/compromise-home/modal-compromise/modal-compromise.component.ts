import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-compromise',
  templateUrl: './modal-compromise.component.html',
  styleUrls: ['./modal-compromise.component.css'],
})
export class ModalCompromiseComponent {
  activeModal = inject(NgbActiveModal);

  @Input() name!: string;
}

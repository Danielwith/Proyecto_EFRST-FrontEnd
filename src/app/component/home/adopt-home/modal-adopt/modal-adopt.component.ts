import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-adopt',
  templateUrl: './modal-adopt.component.html',
  styleUrls: ['./modal-adopt.component.css'],
})
export class ModalAdoptComponent {
  activeModal = inject(NgbActiveModal);

  @Input() name!: string;
}

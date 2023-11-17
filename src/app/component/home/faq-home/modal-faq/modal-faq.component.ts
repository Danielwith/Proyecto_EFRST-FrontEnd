import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-faq',
  templateUrl: './modal-faq.component.html',
  styleUrls: ['./modal-faq.component.css'],
})
export class ModalFaqComponent {
  activeModal = inject(NgbActiveModal);

  @Input() name!: string;
}

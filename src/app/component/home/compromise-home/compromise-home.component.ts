import { Component, inject } from '@angular/core';
import { ModalCompromiseComponent } from './modal-compromise/modal-compromise.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compromise-home',
  templateUrl: './compromise-home.component.html',
  styleUrls: ['./compromise-home.component.css'],
})
export class CompromiseHomeComponent {
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModalCompromiseComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'World';
  }
}

import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdoptComponent } from '../modal-adopt/modal-adopt.component';

@Component({
  selector: 'app-tabla-adopt',
  templateUrl: './tabla-adopt.component.html',
  styleUrls: ['./tabla-adopt.component.css'],
})
export class TablaAdoptComponent {
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModalAdoptComponent, {
      centered: true,
      size: 'xl',
    });
    modalRef.componentInstance.name = 'World';
  }
}

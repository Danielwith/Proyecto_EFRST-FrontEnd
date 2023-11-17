import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdoptComponent } from '../../adopt-home/modal-adopt/modal-adopt.component';

@Component({
  selector: 'app-tabla-favourite',
  templateUrl: './tabla-favourite.component.html',
  styleUrls: ['./tabla-favourite.component.css'],
})
export class TablaFavouriteComponent {
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModalAdoptComponent, {
      centered: true,
      size: 'xl',
    });
    modalRef.componentInstance.name = 'World';
  }
}

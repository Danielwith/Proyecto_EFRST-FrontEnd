import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { Pet } from 'src/app/model/pet.model';
import { ModalAdoptComponent } from '../../adopt-home/modal-adopt/modal-adopt.component';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-tabla-favourite',
  templateUrl: './tabla-favourite.component.html',
  styleUrls: ['./tabla-favourite.component.css'],
})
export class TablaFavouriteComponent {
  private modalService = inject(NgbModal);

  constructor(private data: DataService, private modal: ModalService) {}

  FAVOURITE_DATA: Pet[] = this.data.getFavourites();

  open(id: number) {
    const modalRef = this.modalService.open(ModalAdoptComponent, {
      centered: true,
      size: 'xl',
    });
    this.modal.enviarId(id);
  }
}

import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';
import { Pet } from 'src/app/model/pet.model';
import { ModalAdoptComponent } from '../modal-adopt/modal-adopt.component';

@Component({
  selector: 'app-tabla-adopt',
  templateUrl: './tabla-adopt.component.html',
  styleUrls: ['./tabla-adopt.component.css'],
})
export class TablaAdoptComponent {
  private modalService = inject(NgbModal);

  constructor(private data: DataService) {}

  PET_DATA: Pet[] = this.data.getPet();
  PERSONALITY_DATA: string[] = this.data.getPetPersonalities();

  open() {
    const modalRef = this.modalService.open(ModalAdoptComponent, {
      centered: true,
      size: 'xl',
    });
    modalRef.componentInstance.name = 'World';
  }

  filterPersonality(p: string) {
    if (p === 'all') {
      this.PET_DATA = this.data.getPet();
    } else {
      this.PET_DATA = this.data.getPetsByPersonality(p);
    }
  }

  filterName(n: string) {
    this.PET_DATA = this.data.getPetsByName(n);
  }
}

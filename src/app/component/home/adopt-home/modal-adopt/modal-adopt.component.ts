import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-modal-adopt',
  templateUrl: './modal-adopt.component.html',
  styleUrls: ['./modal-adopt.component.css'],
})
export class ModalAdoptComponent {
  activeModal = inject(NgbActiveModal);

  @Input() name!: string;
  @Input() id!: number;

  constructor(private data: DataService) {
    console.log(this.id);
  }

  PET_DATA = this.data.getPetByID(this.id);
}

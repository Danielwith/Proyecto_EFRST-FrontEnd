import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pet } from 'src/app/model/pet.model';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal-compromise',
  templateUrl: './modal-compromise.component.html',
  styleUrls: ['./modal-compromise.component.css'],
})
export class ModalCompromiseComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  id: number | undefined;
  PET_DATA!: Pet[];

  constructor(private modal: ModalService, private data: DataService) {}
  ngOnInit(): void {
    this.modal.id$.subscribe((id) => {
      this.id = id;
    });

    this.PET_DATA = this.data.getPetByID(this.id ?? 0);
  }

  @Input() name!: string;
}

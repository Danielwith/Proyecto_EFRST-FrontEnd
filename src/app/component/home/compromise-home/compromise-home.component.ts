import { Component, OnInit, inject } from '@angular/core';
import { ModalCompromiseComponent } from './modal-compromise/modal-compromise.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pet } from 'src/app/model/pet.model';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-compromise-home',
  templateUrl: './compromise-home.component.html',
  styleUrls: ['./compromise-home.component.css'],
})
export class CompromiseHomeComponent implements OnInit {
  private modalService = inject(NgbModal);
  id: number | undefined;
  PET_DATA!: Pet[];
  constructor(private data: DataService, private modal: ModalService) {}

  ngOnInit(): void {
    this.modal.id$.subscribe((id) => {
      this.id = id;
    });

    this.PET_DATA = this.data.getPetByID(this.id ?? 0);
  }

  open() {
    const modalRef = this.modalService.open(ModalCompromiseComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'World';
  }
}

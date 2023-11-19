import { Component, Input, OnInit, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pet } from 'src/app/model/pet.model';
import { DataService } from 'src/app/service/data.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal-adopt',
  templateUrl: './modal-adopt.component.html',
  styleUrls: ['./modal-adopt.component.css'],
})
export class ModalAdoptComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  @Input() name!: string;
  id: number | undefined;
  PET_DATA!: Pet[];

  constructor(
    private data: DataService,
    private modal: ModalService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.modal.id$.subscribe((id) => {
      this.id = id;
    });

    this.PET_DATA = this.data.getPetByID(this.id ?? 0);
  }

  adopt() {
    this.snackBar.open(
      'Gracias!, enviaremos tu codigo de adopción por correo.',
      'OK',
      {
        duration: 3000,
      }
    );
    this.activeModal.dismiss();
  }

  favourite() {
    this.snackBar.open('Se agrego a tus favoritos.', 'OK', {
      duration: 3000,
    });
    this.activeModal.dismiss();
  }
}

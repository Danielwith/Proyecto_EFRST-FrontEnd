import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-result-compatibility',
  templateUrl: './result-compatibility.component.html',
  styleUrls: ['./result-compatibility.component.css'],
})
export class ResultCompatibilityComponent {
  //private modalService = inject(NgbModal);

  constructor(private data: DataService) {}

  RESULT_DATA = this.data.getPetsByIDs([1, 2, 9]);

  open(id: number) {
    // const modalRef = this.modalService.open(ModalAdoptComponent, {
    //   centered: true,
    //   size: 'xl',
    // });
    // modalRef.componentInstance.id = id;
  }
}

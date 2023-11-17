import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFaqComponent } from '../modal-faq/modal-faq.component';

@Component({
  selector: 'app-feedback-faq',
  templateUrl: './feedback-faq.component.html',
  styleUrls: ['./feedback-faq.component.css'],
})
export class FeedbackFaqComponent {
  private modalService = inject(NgbModal);
  form: FormGroup;
  comentarioLength = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_tipo: '0',
      comentario: ['', [Validators.required, Validators.maxLength(150)]],
    });
  }

  updateComentarioLength() {
    const comentarioControl = this.form.get('comentario');
    if (comentarioControl) {
      this.comentarioLength = comentarioControl.value.length;
    }
  }

  open() {
    const modalRef = this.modalService.open(ModalFaqComponent, {
      centered: true,
    });
    modalRef.componentInstance.name = 'World';
  }
}

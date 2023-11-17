import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-donation',
  templateUrl: './form-donation.component.html',
  styleUrls: ['./form-donation.component.css'],
})
export class FormDonationComponent {
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
}

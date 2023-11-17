import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdoptComponent } from './modal-adopt.component';

describe('ModalAdoptComponent', () => {
  let component: ModalAdoptComponent;
  let fixture: ComponentFixture<ModalAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

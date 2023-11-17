import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompromiseComponent } from './modal-compromise.component';

describe('ModalCompromiseComponent', () => {
  let component: ModalCompromiseComponent;
  let fixture: ComponentFixture<ModalCompromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCompromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

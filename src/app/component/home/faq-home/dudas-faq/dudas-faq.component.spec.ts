import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudasFaqComponent } from './dudas-faq.component';

describe('DudasFaqComponent', () => {
  let component: DudasFaqComponent;
  let fixture: ComponentFixture<DudasFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudasFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DudasFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

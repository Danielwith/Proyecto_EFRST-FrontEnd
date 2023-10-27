import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorIndexComponent } from './patrocinador-index.component';

describe('PatrocinadorIndexComponent', () => {
  let component: PatrocinadorIndexComponent;
  let fixture: ComponentFixture<PatrocinadorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatrocinadorIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinadorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

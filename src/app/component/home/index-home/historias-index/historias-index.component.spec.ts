import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasIndexComponent } from './historias-index.component';

describe('HistoriasIndexComponent', () => {
  let component: HistoriasIndexComponent;
  let fixture: ComponentFixture<HistoriasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriasIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

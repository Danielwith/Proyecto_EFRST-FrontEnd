import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionIndexComponent } from './donacion-index.component';

describe('DonacionIndexComponent', () => {
  let component: DonacionIndexComponent;
  let fixture: ComponentFixture<DonacionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonacionIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonacionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

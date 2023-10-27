import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionIndexComponent } from './adopcion-index.component';

describe('AdopcionIndexComponent', () => {
  let component: AdopcionIndexComponent;
  let fixture: ComponentFixture<AdopcionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopcionIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdopcionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

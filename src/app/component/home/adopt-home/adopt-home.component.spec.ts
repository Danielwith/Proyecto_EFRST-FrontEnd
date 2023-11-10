import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptHomeComponent } from './adopt-home.component';

describe('AdoptHomeComponent', () => {
  let component: AdoptHomeComponent;
  let fixture: ComponentFixture<AdoptHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

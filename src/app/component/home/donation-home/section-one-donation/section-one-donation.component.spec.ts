import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneDonationComponent } from './section-one-donation.component';

describe('SectionOneDonationComponent', () => {
  let component: SectionOneDonationComponent;
  let fixture: ComponentFixture<SectionOneDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOneDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOneDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

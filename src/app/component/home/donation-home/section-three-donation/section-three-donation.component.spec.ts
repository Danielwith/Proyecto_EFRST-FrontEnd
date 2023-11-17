import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeDonationComponent } from './section-three-donation.component';

describe('SectionThreeDonationComponent', () => {
  let component: SectionThreeDonationComponent;
  let fixture: ComponentFixture<SectionThreeDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionThreeDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionThreeDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

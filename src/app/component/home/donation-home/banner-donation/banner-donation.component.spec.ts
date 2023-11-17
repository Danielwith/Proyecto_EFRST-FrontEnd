import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDonationComponent } from './banner-donation.component';

describe('BannerDonationComponent', () => {
  let component: BannerDonationComponent;
  let fixture: ComponentFixture<BannerDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

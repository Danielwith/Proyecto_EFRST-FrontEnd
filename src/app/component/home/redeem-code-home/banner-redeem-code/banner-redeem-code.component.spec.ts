import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRedeemCodeComponent } from './banner-redeem-code.component';

describe('BannerRedeemCodeComponent', () => {
  let component: BannerRedeemCodeComponent;
  let fixture: ComponentFixture<BannerRedeemCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerRedeemCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerRedeemCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

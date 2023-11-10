import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCampaignComponent } from './banner-campaign.component';

describe('BannerCampaignComponent', () => {
  let component: BannerCampaignComponent;
  let fixture: ComponentFixture<BannerCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

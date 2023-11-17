import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoDonationComponent } from './section-two-donation.component';

describe('SectionTwoDonationComponent', () => {
  let component: SectionTwoDonationComponent;
  let fixture: ComponentFixture<SectionTwoDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTwoDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTwoDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

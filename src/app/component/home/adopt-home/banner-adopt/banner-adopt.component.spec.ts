import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAdoptComponent } from './banner-adopt.component';

describe('BannerAdoptComponent', () => {
  let component: BannerAdoptComponent;
  let fixture: ComponentFixture<BannerAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

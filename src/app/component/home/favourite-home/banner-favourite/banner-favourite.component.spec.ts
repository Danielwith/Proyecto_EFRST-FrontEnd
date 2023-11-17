import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFavouriteComponent } from './banner-favourite.component';

describe('BannerFavouriteComponent', () => {
  let component: BannerFavouriteComponent;
  let fixture: ComponentFixture<BannerFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

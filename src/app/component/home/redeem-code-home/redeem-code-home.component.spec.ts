import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemCodeHomeComponent } from './redeem-code-home.component';

describe('RedeemCodeHomeComponent', () => {
  let component: RedeemCodeHomeComponent;
  let fixture: ComponentFixture<RedeemCodeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemCodeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeemCodeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

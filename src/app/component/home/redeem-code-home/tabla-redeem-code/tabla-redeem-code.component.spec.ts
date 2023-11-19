import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRedeemCodeComponent } from './tabla-redeem-code.component';

describe('TablaRedeemCodeComponent', () => {
  let component: TablaRedeemCodeComponent;
  let fixture: ComponentFixture<TablaRedeemCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRedeemCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRedeemCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIndexComponent } from './info-index.component';

describe('InfoIndexComponent', () => {
  let component: InfoIndexComponent;
  let fixture: ComponentFixture<InfoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

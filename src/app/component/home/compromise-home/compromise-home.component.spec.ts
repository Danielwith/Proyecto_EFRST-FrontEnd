import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromiseHomeComponent } from './compromise-home.component';

describe('CompromiseHomeComponent', () => {
  let component: CompromiseHomeComponent;
  let fixture: ComponentFixture<CompromiseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromiseHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompromiseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

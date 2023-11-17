import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCompatibilityComponent } from './result-compatibility.component';

describe('ResultCompatibilityComponent', () => {
  let component: ResultCompatibilityComponent;
  let fixture: ComponentFixture<ResultCompatibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCompatibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

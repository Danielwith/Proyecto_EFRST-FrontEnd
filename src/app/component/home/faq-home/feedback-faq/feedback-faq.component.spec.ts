import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFaqComponent } from './feedback-faq.component';

describe('FeedbackFaqComponent', () => {
  let component: FeedbackFaqComponent;
  let fixture: ComponentFixture<FeedbackFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

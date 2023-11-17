import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCompatibilityComponent } from './content-compatibility.component';

describe('ContentCompatibilityComponent', () => {
  let component: ContentCompatibilityComponent;
  let fixture: ComponentFixture<ContentCompatibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCompatibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCompatibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

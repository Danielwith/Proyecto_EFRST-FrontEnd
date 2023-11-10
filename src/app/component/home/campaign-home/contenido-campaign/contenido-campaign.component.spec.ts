import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCampaignComponent } from './contenido-campaign.component';

describe('ContenidoCampaignComponent', () => {
  let component: ContenidoCampaignComponent;
  let fixture: ComponentFixture<ContenidoCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAdoptComponent } from './tabla-adopt.component';

describe('TablaAdoptComponent', () => {
  let component: TablaAdoptComponent;
  let fixture: ComponentFixture<TablaAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

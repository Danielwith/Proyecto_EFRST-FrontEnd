import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFavouriteComponent } from './tabla-favourite.component';

describe('TablaFavouriteComponent', () => {
  let component: TablaFavouriteComponent;
  let fixture: ComponentFixture<TablaFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

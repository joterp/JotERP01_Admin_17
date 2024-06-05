import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBVictuallingMealIndexComponent } from './crew-pb-victualling-meal-index.component';

describe('CREWPBVictuallingMealIndexComponent', () => {
  let component: CREWPBVictuallingMealIndexComponent;
  let fixture: ComponentFixture<CREWPBVictuallingMealIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBVictuallingMealIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBVictuallingMealIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

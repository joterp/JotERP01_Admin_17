import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBVictuallingMealIndexAddComponent } from './crew-pb-victualling-meal-index-add.component';

describe('CREWPBVictuallingMealIndexAddComponent', () => {
  let component: CREWPBVictuallingMealIndexAddComponent;
  let fixture: ComponentFixture<CREWPBVictuallingMealIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBVictuallingMealIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBVictuallingMealIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

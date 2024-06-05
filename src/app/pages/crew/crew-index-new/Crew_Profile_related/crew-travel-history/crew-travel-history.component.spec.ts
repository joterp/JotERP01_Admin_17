import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWTravelHistoryComponent } from './crew-travel-history.component';

describe('CREWTravelHistoryComponent', () => {
  let component: CREWTravelHistoryComponent;
  let fixture: ComponentFixture<CREWTravelHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWTravelHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWTravelHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

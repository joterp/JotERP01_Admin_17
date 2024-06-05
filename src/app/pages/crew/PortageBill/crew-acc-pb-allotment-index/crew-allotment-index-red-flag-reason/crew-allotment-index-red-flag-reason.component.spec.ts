import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAllotmentIndexRedFlagReasonComponent } from './crew-allotment-index-red-flag-reason.component';

describe('CREWAllotmentIndexRedFlagReasonComponent', () => {
  let component: CREWAllotmentIndexRedFlagReasonComponent;
  let fixture: ComponentFixture<CREWAllotmentIndexRedFlagReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAllotmentIndexRedFlagReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAllotmentIndexRedFlagReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

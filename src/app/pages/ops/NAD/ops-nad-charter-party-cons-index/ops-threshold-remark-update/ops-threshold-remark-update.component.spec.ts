import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSThresholdRemarkUpdateComponent } from './ops-threshold-remark-update.component';

describe('OPSThresholdRemarkUpdateComponent', () => {
  let component: OPSThresholdRemarkUpdateComponent;
  let fixture: ComponentFixture<OPSThresholdRemarkUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSThresholdRemarkUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSThresholdRemarkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBWaterINComponent } from './ops-lib-water-in.component';

describe('OPSLIBWaterINComponent', () => {
  let component: OPSLIBWaterINComponent;
  let fixture: ComponentFixture<OPSLIBWaterINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBWaterINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBWaterINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

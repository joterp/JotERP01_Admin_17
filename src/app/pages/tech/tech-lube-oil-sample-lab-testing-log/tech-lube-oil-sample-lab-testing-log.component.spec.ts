import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLubeOilSampleLabTestingLogComponent } from './tech-lube-oil-sample-lab-testing-log.component';

describe('TECHLubeOilSampleLabTestingLogComponent', () => {
  let component: TECHLubeOilSampleLabTestingLogComponent;
  let fixture: ComponentFixture<TECHLubeOilSampleLabTestingLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLubeOilSampleLabTestingLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLubeOilSampleLabTestingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

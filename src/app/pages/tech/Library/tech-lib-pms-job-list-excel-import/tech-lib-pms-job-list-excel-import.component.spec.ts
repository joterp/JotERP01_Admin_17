import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLIBPMSJOBLISTEXCELIMPORTComponent } from './tech-lib-pms-job-list-excel-import.component';

describe('TECHLIBPMSJOBLISTEXCELIMPORTComponent', () => {
  let component: TECHLIBPMSJOBLISTEXCELIMPORTComponent;
  let fixture: ComponentFixture<TECHLIBPMSJOBLISTEXCELIMPORTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLIBPMSJOBLISTEXCELIMPORTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLIBPMSJOBLISTEXCELIMPORTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

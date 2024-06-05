import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHVMPPMSChangeRequestIndexComponent } from './tech-vmp-pms-change-request-index.component';

describe('TECHVMPPMSChangeRequestIndexComponent', () => {
  let component: TECHVMPPMSChangeRequestIndexComponent;
  let fixture: ComponentFixture<TECHVMPPMSChangeRequestIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHVMPPMSChangeRequestIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHVMPPMSChangeRequestIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

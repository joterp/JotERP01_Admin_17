import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQLIBVESSELKPIComponent } from './hseq-lib-vessel-kpi.component';

describe('HSEQLIBVESSELKPIComponent', () => {
  let component: HSEQLIBVESSELKPIComponent;
  let fixture: ComponentFixture<HSEQLIBVESSELKPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQLIBVESSELKPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQLIBVESSELKPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

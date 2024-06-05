import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddMonoeveringComponent } from './ops-nad-add-monoevering.component';

describe('OPSNADAddMonoeveringComponent', () => {
  let component: OPSNADAddMonoeveringComponent;
  let fixture: ComponentFixture<OPSNADAddMonoeveringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddMonoeveringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddMonoeveringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

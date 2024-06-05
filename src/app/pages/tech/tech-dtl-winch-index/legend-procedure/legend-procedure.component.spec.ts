import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendProcedureComponent } from './legend-procedure.component';

describe('LegendProcedureComponent', () => {
  let component: LegendProcedureComponent;
  let fixture: ComponentFixture<LegendProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

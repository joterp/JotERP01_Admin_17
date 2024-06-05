import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADIndexComponent } from './ops-nad-index.component';

describe('OPSNADIndexComponent', () => {
  let component: OPSNADIndexComponent;
  let fixture: ComponentFixture<OPSNADIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

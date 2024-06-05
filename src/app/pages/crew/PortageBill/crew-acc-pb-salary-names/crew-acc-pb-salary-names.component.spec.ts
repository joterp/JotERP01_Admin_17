import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBSalaryNamesComponent } from './crew-acc-pb-salary-names.component';

describe('CREWACCPBSalaryNamesComponent', () => {
  let component: CREWACCPBSalaryNamesComponent;
  let fixture: ComponentFixture<CREWACCPBSalaryNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBSalaryNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBSalaryNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

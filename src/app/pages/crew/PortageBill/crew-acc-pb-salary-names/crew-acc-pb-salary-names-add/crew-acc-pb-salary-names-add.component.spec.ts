import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBSalaryNamesAddComponent } from './crew-acc-pb-salary-names-add.component';

describe('CREWACCPBSalaryNamesAddComponent', () => {
  let component: CREWACCPBSalaryNamesAddComponent;
  let fixture: ComponentFixture<CREWACCPBSalaryNamesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBSalaryNamesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBSalaryNamesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

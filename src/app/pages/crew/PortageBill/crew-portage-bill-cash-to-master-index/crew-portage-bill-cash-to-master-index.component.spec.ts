import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPortageBillCashToMasterIndexComponent } from './crew-portage-bill-cash-to-master-index.component';

describe('CREWPortageBillCashToMasterIndexComponent', () => {
  let component: CREWPortageBillCashToMasterIndexComponent;
  let fixture: ComponentFixture<CREWPortageBillCashToMasterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPortageBillCashToMasterIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPortageBillCashToMasterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPortageBillCashToMasterIndexAddComponent } from './crew-portage-bill-cash-to-master-index-add.component';

describe('CREWPortageBillCashToMasterIndexAddComponent', () => {
  let component: CREWPortageBillCashToMasterIndexAddComponent;
  let fixture: ComponentFixture<CREWPortageBillCashToMasterIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPortageBillCashToMasterIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPortageBillCashToMasterIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

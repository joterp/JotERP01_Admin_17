import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPortageBillRecordSummaryComponent } from './crew-acc-portage-bill-record-summary.component';

describe('CREWACCPortageBillRecordSummaryComponent', () => {
  let component: CREWACCPortageBillRecordSummaryComponent;
  let fixture: ComponentFixture<CREWACCPortageBillRecordSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPortageBillRecordSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPortageBillRecordSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

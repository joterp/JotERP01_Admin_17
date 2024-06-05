import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBAllotmentIndexComponent } from './crew-acc-pb-allotment-index.component';

describe('CREWACCPBAllotmentIndexComponent', () => {
  let component: CREWACCPBAllotmentIndexComponent;
  let fixture: ComponentFixture<CREWACCPBAllotmentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBAllotmentIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBAllotmentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

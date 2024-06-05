import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBAllotmentsComponent } from './crew-acc-pb-allotments.component';

describe('CREWACCPBAllotmentsComponent', () => {
  let component: CREWACCPBAllotmentsComponent;
  let fixture: ComponentFixture<CREWACCPBAllotmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBAllotmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBAllotmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

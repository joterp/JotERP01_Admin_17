import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCostRegistrationIndexComponent } from './crew-cost-registration-index.component';

describe('CREWCostRegistrationIndexComponent', () => {
  let component: CREWCostRegistrationIndexComponent;
  let fixture: ComponentFixture<CREWCostRegistrationIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCostRegistrationIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCostRegistrationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

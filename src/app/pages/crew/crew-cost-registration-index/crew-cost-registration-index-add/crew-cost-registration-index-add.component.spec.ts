import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCostRegistrationIndexAddComponent } from './crew-cost-registration-index-add.component';

describe('CREWCostRegistrationIndexAddComponent', () => {
  let component: CREWCostRegistrationIndexAddComponent;
  let fixture: ComponentFixture<CREWCostRegistrationIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCostRegistrationIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCostRegistrationIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAddShipManagerCommissionComponent } from './purc-add-ship-manager-commission.component';

describe('PURCAddShipManagerCommissionComponent', () => {
  let component: PURCAddShipManagerCommissionComponent;
  let fixture: ComponentFixture<PURCAddShipManagerCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAddShipManagerCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAddShipManagerCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

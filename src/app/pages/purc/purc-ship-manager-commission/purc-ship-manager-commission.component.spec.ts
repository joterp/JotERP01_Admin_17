import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCShipManagerCommissionComponent } from './purc-ship-manager-commission.component';

describe('PURCShipManagerCommissionComponent', () => {
  let component: PURCShipManagerCommissionComponent;
  let fixture: ComponentFixture<PURCShipManagerCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCShipManagerCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCShipManagerCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

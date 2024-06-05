import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAccountPayableComponent } from './purc-account-payable.component';

describe('PURCAccountPayableComponent', () => {
  let component: PURCAccountPayableComponent;
  let fixture: ComponentFixture<PURCAccountPayableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAccountPayableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAccountPayableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCInviteSupplierComponent } from './purc-invite-supplier.component';

describe('PURCInviteSupplierComponent', () => {
  let component: PURCInviteSupplierComponent;
  let fixture: ComponentFixture<PURCInviteSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCInviteSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCInviteSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

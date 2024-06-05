import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAccountPayableGenerateLinkModalComponent } from './purc-account-payable-generate-link-modal.component';

describe('PURCAccountPayableGenerateLinkModalComponent', () => {
  let component: PURCAccountPayableGenerateLinkModalComponent;
  let fixture: ComponentFixture<PURCAccountPayableGenerateLinkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAccountPayableGenerateLinkModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAccountPayableGenerateLinkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

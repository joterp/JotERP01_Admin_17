import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCPOTermsModalComponent } from './purc-poterms-modal.component';

describe('PURCPOTermsModalComponent', () => {
  let component: PURCPOTermsModalComponent;
  let fixture: ComponentFixture<PURCPOTermsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCPOTermsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCPOTermsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

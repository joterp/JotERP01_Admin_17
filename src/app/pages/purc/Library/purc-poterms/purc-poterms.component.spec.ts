import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCPOTermsComponent } from './purc-poterms.component';

describe('PURCPOTermsComponent', () => {
  let component: PURCPOTermsComponent;
  let fixture: ComponentFixture<PURCPOTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCPOTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCPOTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYCertificateEditComponent } from './survey-certificate-edit.component';

describe('SURVEYCertificateEditComponent', () => {
  let component: SURVEYCertificateEditComponent;
  let fixture: ComponentFixture<SURVEYCertificateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYCertificateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYCertificateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

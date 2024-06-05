import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYCertificateComponent } from './survey-certificate.component';

describe('SURVEYCertificateComponent', () => {
  let component: SURVEYCertificateComponent;
  let fixture: ComponentFixture<SURVEYCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYCertificateIndexComponent } from './survey-certificate-index.component';

describe('SURVEYCertificateIndexComponent', () => {
  let component: SURVEYCertificateIndexComponent;
  let fixture: ComponentFixture<SURVEYCertificateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYCertificateIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYCertificateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

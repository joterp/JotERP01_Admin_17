import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SORTCertificateModelComponent } from './sort-certificate-model.component';

describe('SORTCertificateModelComponent', () => {
  let component: SORTCertificateModelComponent;
  let fixture: ComponentFixture<SORTCertificateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SORTCertificateModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SORTCertificateModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

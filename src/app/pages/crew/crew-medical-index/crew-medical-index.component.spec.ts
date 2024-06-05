import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalIndexComponent } from './crew-medical-index.component';

describe('CREWMedicalIndexComponent', () => {
  let component: CREWMedicalIndexComponent;
  let fixture: ComponentFixture<CREWMedicalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

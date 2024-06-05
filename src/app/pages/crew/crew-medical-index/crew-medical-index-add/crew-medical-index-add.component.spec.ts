import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalIndexAddComponent } from './crew-medical-index-add.component';

describe('CREWMedicalIndexAddComponent', () => {
  let component: CREWMedicalIndexAddComponent;
  let fixture: ComponentFixture<CREWMedicalIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

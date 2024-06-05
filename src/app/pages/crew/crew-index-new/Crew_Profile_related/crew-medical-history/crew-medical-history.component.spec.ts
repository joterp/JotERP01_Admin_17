import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalHistoryComponent } from './crew-medical-history.component';

describe('CREWMedicalHistoryComponent', () => {
  let component: CREWMedicalHistoryComponent;
  let fixture: ComponentFixture<CREWMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

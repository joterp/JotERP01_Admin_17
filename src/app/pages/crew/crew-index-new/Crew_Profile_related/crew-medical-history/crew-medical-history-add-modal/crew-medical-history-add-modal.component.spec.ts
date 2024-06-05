import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMedicalHistoryAddModalComponent } from './crew-medical-history-add-modal.component';

describe('CREWMedicalHistoryAddModalComponent', () => {
  let component: CREWMedicalHistoryAddModalComponent;
  let fixture: ComponentFixture<CREWMedicalHistoryAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMedicalHistoryAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMedicalHistoryAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

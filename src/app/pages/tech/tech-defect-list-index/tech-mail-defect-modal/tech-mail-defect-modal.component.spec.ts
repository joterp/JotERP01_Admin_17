import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHMailDefectModalComponent } from './tech-mail-defect-modal.component';

describe('TECHMailDefectModalComponent', () => {
  let component: TECHMailDefectModalComponent;
  let fixture: ComponentFixture<TECHMailDefectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHMailDefectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHMailDefectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHAddPMSFolloupModalComponent } from './tech-add-pms-folloup-modal.component';

describe('TECHAddPMSFolloupModalComponent', () => {
  let component: TECHAddPMSFolloupModalComponent;
  let fixture: ComponentFixture<TECHAddPMSFolloupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHAddPMSFolloupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHAddPMSFolloupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

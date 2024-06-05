import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHAddAttachmentsComponent } from './tech-add-attachments.component';

describe('TECHAddAttachmentsComponent', () => {
  let component: TECHAddAttachmentsComponent;
  let fixture: ComponentFixture<TECHAddAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHAddAttachmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHAddAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

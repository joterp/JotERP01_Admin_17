import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmDocumentsComponent } from './hrm-documents.component';

describe('HrmDocumentsComponent', () => {
  let component: HrmDocumentsComponent;
  let fixture: ComponentFixture<HrmDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmDocumentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

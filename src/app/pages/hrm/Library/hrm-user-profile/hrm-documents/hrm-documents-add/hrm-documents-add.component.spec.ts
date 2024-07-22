import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmDocumentsAddComponent } from './hrm-documents-add.component';

describe('HrmDocumentsAddComponent', () => {
  let component: HrmDocumentsAddComponent;
  let fixture: ComponentFixture<HrmDocumentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmDocumentsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmDocumentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

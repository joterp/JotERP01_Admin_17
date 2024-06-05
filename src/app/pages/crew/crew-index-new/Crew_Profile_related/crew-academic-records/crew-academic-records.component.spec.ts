import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAcademicRecordsComponent } from './crew-academic-records.component';

describe('CREWAcademicRecordsComponent', () => {
  let component: CREWAcademicRecordsComponent;
  let fixture: ComponentFixture<CREWAcademicRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAcademicRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAcademicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyJobsModelComponent } from './copy-jobs-model.component';

describe('CopyJobsModelComponent', () => {
  let component: CopyJobsModelComponent;
  let fixture: ComponentFixture<CopyJobsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyJobsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyJobsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyReportsComponent } from './copy-reports.component';

describe('CopyReportsComponent', () => {
  let component: CopyReportsComponent;
  let fixture: ComponentFixture<CopyReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

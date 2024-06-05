import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COMPARETIMELAPSEComponent } from './compare-timelapse.component';

describe('COMPARETIMELAPSEComponent', () => {
  let component: COMPARETIMELAPSEComponent;
  let fixture: ComponentFixture<COMPARETIMELAPSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COMPARETIMELAPSEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COMPARETIMELAPSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

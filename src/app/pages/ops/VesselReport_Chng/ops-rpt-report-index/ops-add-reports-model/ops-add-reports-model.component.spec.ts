import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSAddReportsModelComponent } from './ops-add-reports-model.component';

describe('OPSAddReportsModelComponent', () => {
  let component: OPSAddReportsModelComponent;
  let fixture: ComponentFixture<OPSAddReportsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSAddReportsModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSAddReportsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

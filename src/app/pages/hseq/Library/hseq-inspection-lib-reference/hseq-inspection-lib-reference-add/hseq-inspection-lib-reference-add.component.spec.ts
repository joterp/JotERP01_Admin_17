import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQInspectionLIBReferenceAddComponent } from './hseq-inspection-lib-reference-add.component';

describe('HSEQInspectionLIBReferenceAddComponent', () => {
  let component: HSEQInspectionLIBReferenceAddComponent;
  let fixture: ComponentFixture<HSEQInspectionLIBReferenceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQInspectionLIBReferenceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQInspectionLIBReferenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

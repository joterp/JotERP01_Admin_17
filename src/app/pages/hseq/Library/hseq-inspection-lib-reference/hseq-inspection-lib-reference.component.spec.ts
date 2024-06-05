import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQInspectionLIBReferenceComponent } from './hseq-inspection-lib-reference.component';

describe('HSEQInspectionLIBReferenceComponent', () => {
  let component: HSEQInspectionLIBReferenceComponent;
  let fixture: ComponentFixture<HSEQInspectionLIBReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQInspectionLIBReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQInspectionLIBReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibVslParticularsLabelsAddComponent } from './ops-lib-vsl-particulars-labels-add.component';

describe('OpsLibVslParticularsLabelsAddComponent', () => {
  let component: OpsLibVslParticularsLabelsAddComponent;
  let fixture: ComponentFixture<OpsLibVslParticularsLabelsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsLibVslParticularsLabelsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsLibVslParticularsLabelsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibLubeSampleNameEditComponent } from './ops-lib-lube-sample-name-edit.component';

describe('OpsLibLubeSampleNameEditComponent', () => {
  let component: OpsLibLubeSampleNameEditComponent;
  let fixture: ComponentFixture<OpsLibLubeSampleNameEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsLibLubeSampleNameEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsLibLubeSampleNameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

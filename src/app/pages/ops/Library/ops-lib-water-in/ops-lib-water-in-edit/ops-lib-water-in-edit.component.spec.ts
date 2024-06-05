import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibWaterInEditComponent } from './ops-lib-water-in-edit.component';

describe('OpsLibWaterInEditComponent', () => {
  let component: OpsLibWaterInEditComponent;
  let fixture: ComponentFixture<OpsLibWaterInEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsLibWaterInEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsLibWaterInEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

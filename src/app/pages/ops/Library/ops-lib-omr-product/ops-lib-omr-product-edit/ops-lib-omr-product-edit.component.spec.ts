import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibOmrProductEditComponent } from './ops-lib-omr-product-edit.component';

describe('OpsLibOmrProductEditComponent', () => {
  let component: OpsLibOmrProductEditComponent;
  let fixture: ComponentFixture<OpsLibOmrProductEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpsLibOmrProductEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsLibOmrProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

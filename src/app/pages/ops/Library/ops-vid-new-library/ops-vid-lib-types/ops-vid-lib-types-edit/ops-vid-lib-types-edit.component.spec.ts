import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDLIBTypesEditComponent } from './ops-vid-lib-types-edit.component';

describe('OPSVIDLIBTypesEditComponent', () => {
  let component: OPSVIDLIBTypesEditComponent;
  let fixture: ComponentFixture<OPSVIDLIBTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDLIBTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDLIBTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

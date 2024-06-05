import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVOYAGECPLIBRARYEditComponent } from './ops-voyage-cp-library-edit.component';

describe('OPSVOYAGECPLIBRARYEditComponent', () => {
  let component: OPSVOYAGECPLIBRARYEditComponent;
  let fixture: ComponentFixture<OPSVOYAGECPLIBRARYEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVOYAGECPLIBRARYEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVOYAGECPLIBRARYEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

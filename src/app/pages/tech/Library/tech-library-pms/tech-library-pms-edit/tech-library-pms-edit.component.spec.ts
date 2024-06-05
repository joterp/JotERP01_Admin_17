import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLibraryPMSEditComponent } from './tech-library-pms-edit.component';

describe('TECHLibraryPMSEditComponent', () => {
  let component: TECHLibraryPMSEditComponent;
  let fixture: ComponentFixture<TECHLibraryPMSEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLibraryPMSEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLibraryPMSEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

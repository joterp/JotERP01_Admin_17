import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHLibraryPMSComponent } from './tech-library-pms.component';

describe('TECHLibraryPMSComponent', () => {
  let component: TECHLibraryPMSComponent;
  let fixture: ComponentFixture<TECHLibraryPMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHLibraryPMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHLibraryPMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

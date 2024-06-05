import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCLIBASLEXCELIMPORTComponent } from './purc-lib-asl-excel-import.component';

describe('PURCLIBASLEXCELIMPORTComponent', () => {
  let component: PURCLIBASLEXCELIMPORTComponent;
  let fixture: ComponentFixture<PURCLIBASLEXCELIMPORTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCLIBASLEXCELIMPORTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCLIBASLEXCELIMPORTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

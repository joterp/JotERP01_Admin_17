import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCASLSuppTypeDeptMappingEditComponent } from './purc-asl-supp-type-dept-mapping-edit.component';

describe('PURCASLSuppTypeDeptMappingEditComponent', () => {
  let component: PURCASLSuppTypeDeptMappingEditComponent;
  let fixture: ComponentFixture<PURCASLSuppTypeDeptMappingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCASLSuppTypeDeptMappingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCASLSuppTypeDeptMappingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCASLSuppTypeDeptMappingComponent } from './purc-asl-supp-type-dept-mapping.component';

describe('PURCASLSuppTypeDeptMappingComponent', () => {
  let component: PURCASLSuppTypeDeptMappingComponent;
  let fixture: ComponentFixture<PURCASLSuppTypeDeptMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCASLSuppTypeDeptMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCASLSuppTypeDeptMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

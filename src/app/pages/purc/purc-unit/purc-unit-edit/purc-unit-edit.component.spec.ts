import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCUnitEditComponent } from './purc-unit-edit.component';

describe('PURCUnitEditComponent', () => {
  let component: PURCUnitEditComponent;
  let fixture: ComponentFixture<PURCUnitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCUnitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

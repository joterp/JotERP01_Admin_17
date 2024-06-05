import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWSalaryStructureAddComponent } from './crew-salary-structure-add.component';

describe('CREWSalaryStructureAddComponent', () => {
  let component: CREWSalaryStructureAddComponent;
  let fixture: ComponentFixture<CREWSalaryStructureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWSalaryStructureAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWSalaryStructureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

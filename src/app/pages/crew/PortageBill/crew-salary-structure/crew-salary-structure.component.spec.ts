import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWSalaryStructureComponent } from './crew-salary-structure.component';

describe('CREWSalaryStructureComponent', () => {
  let component: CREWSalaryStructureComponent;
  let fixture: ComponentFixture<CREWSalaryStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWSalaryStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWSalaryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAssignNationalityModelComponent } from './crew-assign-nationality-model.component';

describe('CREWAssignNationalityModelComponent', () => {
  let component: CREWAssignNationalityModelComponent;
  let fixture: ComponentFixture<CREWAssignNationalityModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAssignNationalityModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAssignNationalityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

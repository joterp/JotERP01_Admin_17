import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYTenureEditComponent } from './survey-tenure-edit.component';

describe('SURVEYTenureEditComponent', () => {
  let component: SURVEYTenureEditComponent;
  let fixture: ComponentFixture<SURVEYTenureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYTenureEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYTenureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

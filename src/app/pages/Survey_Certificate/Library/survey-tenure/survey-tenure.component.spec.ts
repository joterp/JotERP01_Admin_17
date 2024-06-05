import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYTenureComponent } from './survey-tenure.component';

describe('SURVEYTenureComponent', () => {
  let component: SURVEYTenureComponent;
  let fixture: ComponentFixture<SURVEYTenureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYTenureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYTenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

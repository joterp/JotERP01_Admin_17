import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCLocationEditComponent } from './purc-location-edit.component';

describe('PURCLocationEditComponent', () => {
  let component: PURCLocationEditComponent;
  let fixture: ComponentFixture<PURCLocationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCLocationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

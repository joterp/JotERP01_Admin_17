import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWNewEditComponent } from './crew-new-edit.component';

describe('CREWNewEditComponent', () => {
  let component: CREWNewEditComponent;
  let fixture: ComponentFixture<CREWNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWNewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWNewEditModalComponent } from './crew-new-edit-modal.component';

describe('CREWNewEditModalComponent', () => {
  let component: CREWNewEditModalComponent;
  let fixture: ComponentFixture<CREWNewEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWNewEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWNewEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

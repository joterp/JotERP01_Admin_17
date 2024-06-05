import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInterviewAddModalComponent } from './crew-interview-add-modal.component';

describe('CREWInterviewAddModalComponent', () => {
  let component: CREWInterviewAddModalComponent;
  let fixture: ComponentFixture<CREWInterviewAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInterviewAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInterviewAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHSendMailModalComponent } from './tech-send-mail-modal.component';

describe('TECHSendMailModalComponent', () => {
  let component: TECHSendMailModalComponent;
  let fixture: ComponentFixture<TECHSendMailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHSendMailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHSendMailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAttachmentModelComponent } from './send-attachment-model.component';

describe('SendAttachmentModelComponent', () => {
  let component: SendAttachmentModelComponent;
  let fixture: ComponentFixture<SendAttachmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAttachmentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAttachmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRAActivityOperationControlComponent } from './hseq-ra-activity-operation-control.component';

describe('HSEQRAActivityOperationControlComponent', () => {
  let component: HSEQRAActivityOperationControlComponent;
  let fixture: ComponentFixture<HSEQRAActivityOperationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRAActivityOperationControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRAActivityOperationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

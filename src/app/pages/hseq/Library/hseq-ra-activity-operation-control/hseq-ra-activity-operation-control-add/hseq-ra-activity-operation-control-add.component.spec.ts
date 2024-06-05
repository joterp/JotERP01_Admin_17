import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRAActivityOperationControlAddComponent } from './hseq-ra-activity-operation-control-add.component';

describe('HSEQRAActivityOperationControlAddComponent', () => {
  let component: HSEQRAActivityOperationControlAddComponent;
  let fixture: ComponentFixture<HSEQRAActivityOperationControlAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRAActivityOperationControlAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRAActivityOperationControlAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

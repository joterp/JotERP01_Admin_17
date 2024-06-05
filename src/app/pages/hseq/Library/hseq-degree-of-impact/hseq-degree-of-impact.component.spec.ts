import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQDEGREEOFIMPACTComponent } from './hseq-degree-of-impact.component';

describe('HSEQDEGREEOFIMPACTComponent', () => {
  let component: HSEQDEGREEOFIMPACTComponent;
  let fixture: ComponentFixture<HSEQDEGREEOFIMPACTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQDEGREEOFIMPACTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQDEGREEOFIMPACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQDEGREEOFIMPACTADDComponent } from './hseq-degree-of-impact-add.component';

describe('HSEQDEGREEOFIMPACTADDComponent', () => {
  let component: HSEQDEGREEOFIMPACTADDComponent;
  let fixture: ComponentFixture<HSEQDEGREEOFIMPACTADDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQDEGREEOFIMPACTADDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQDEGREEOFIMPACTADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

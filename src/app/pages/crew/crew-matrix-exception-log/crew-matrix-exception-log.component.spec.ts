import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMatrixExceptionLogComponent } from './crew-matrix-exception-log.component';

describe('CREWMatrixExceptionLogComponent', () => {
  let component: CREWMatrixExceptionLogComponent;
  let fixture: ComponentFixture<CREWMatrixExceptionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMatrixExceptionLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMatrixExceptionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

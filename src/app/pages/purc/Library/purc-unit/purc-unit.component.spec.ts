import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCUnitComponent } from './purc-unit.component';

describe('PURCUnitComponent', () => {
  let component: PURCUnitComponent;
  let fixture: ComponentFixture<PURCUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

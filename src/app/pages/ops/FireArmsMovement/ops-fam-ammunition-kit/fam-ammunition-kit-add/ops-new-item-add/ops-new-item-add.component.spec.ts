import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNewItemAddComponent } from './ops-new-item-add.component';

describe('OPSNewItemAddComponent', () => {
  let component: OPSNewItemAddComponent;
  let fixture: ComponentFixture<OPSNewItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNewItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNewItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

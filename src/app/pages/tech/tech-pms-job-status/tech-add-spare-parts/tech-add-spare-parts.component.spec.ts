import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHAddSparePartsComponent } from './tech-add-spare-parts.component';

describe('TECHAddSparePartsComponent', () => {
  let component: TECHAddSparePartsComponent;
  let fixture: ComponentFixture<TECHAddSparePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHAddSparePartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHAddSparePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

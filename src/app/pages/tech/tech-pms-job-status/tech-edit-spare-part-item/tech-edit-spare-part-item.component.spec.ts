import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHEditSparePartItemComponent } from './tech-edit-spare-part-item.component';

describe('TECHEditSparePartItemComponent', () => {
  let component: TECHEditSparePartItemComponent;
  let fixture: ComponentFixture<TECHEditSparePartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHEditSparePartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHEditSparePartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

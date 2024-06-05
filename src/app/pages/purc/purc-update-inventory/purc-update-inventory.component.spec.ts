import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCUpdateInventoryComponent } from './purc-update-inventory.component';

describe('PURCUpdateInventoryComponent', () => {
  let component: PURCUpdateInventoryComponent;
  let fixture: ComponentFixture<PURCUpdateInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCUpdateInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCUpdateInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

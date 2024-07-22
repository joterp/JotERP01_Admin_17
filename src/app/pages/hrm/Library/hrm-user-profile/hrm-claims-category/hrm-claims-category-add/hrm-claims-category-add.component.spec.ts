import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmClaimsCategoryAddComponent } from './hrm-claims-category-add.component';

describe('HrmClaimsCategoryAddComponent', () => {
  let component: HrmClaimsCategoryAddComponent;
  let fixture: ComponentFixture<HrmClaimsCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmClaimsCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmClaimsCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

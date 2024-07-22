import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmClaimsCategoryComponent } from './hrm-claims-category.component';

describe('HrmClaimsCategoryComponent', () => {
  let component: HrmClaimsCategoryComponent;
  let fixture: ComponentFixture<HrmClaimsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmClaimsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmClaimsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

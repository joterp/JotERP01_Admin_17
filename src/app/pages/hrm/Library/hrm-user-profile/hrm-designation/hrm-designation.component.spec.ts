import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmDesignationComponent } from './hrm-designation.component';

describe('HrmDesignationComponent', () => {
  let component: HrmDesignationComponent;
  let fixture: ComponentFixture<HrmDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmDesignationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

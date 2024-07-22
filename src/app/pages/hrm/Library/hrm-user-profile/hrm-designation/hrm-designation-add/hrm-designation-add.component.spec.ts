import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmDesignationAddComponent } from './hrm-designation-add.component';

describe('HrmDesignationAddComponent', () => {
  let component: HrmDesignationAddComponent;
  let fixture: ComponentFixture<HrmDesignationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmDesignationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmDesignationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

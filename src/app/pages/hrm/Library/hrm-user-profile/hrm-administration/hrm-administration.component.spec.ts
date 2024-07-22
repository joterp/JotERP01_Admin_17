import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmAdministrationComponent } from './hrm-administration.component';

describe('HrmAdministrationComponent', () => {
  let component: HrmAdministrationComponent;
  let fixture: ComponentFixture<HrmAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

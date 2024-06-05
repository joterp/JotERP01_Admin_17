import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PURCDepartmentAddComponent } from './purc-department-add.component';


describe('ADDEDITPURCDepartmentComponent', () => {
  let component: PURCDepartmentAddComponent;
  let fixture: ComponentFixture<PURCDepartmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCDepartmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCDepartmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PURCContractModuleEditComponent } from './purc-contract-module-edit.component';



describe('PURCContractModuleDetailsComponent', () => {
  let component: PURCContractModuleEditComponent;
  let fixture: ComponentFixture<PURCContractModuleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCContractModuleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCContractModuleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

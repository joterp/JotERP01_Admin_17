import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OPSFamAmmunitionKitAddComponent } from './fam-ammunition-kit-add.component';



describe('OPSFamAmmunitionKitAddComponent', () => {
  let component: OPSFamAmmunitionKitAddComponent;
  let fixture: ComponentFixture<OPSFamAmmunitionKitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSFamAmmunitionKitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSFamAmmunitionKitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

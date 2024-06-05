import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OPSFAMAmmunitionKitComponent } from './ops-fam-ammunition-kit.component';



describe('OPSFAMAmmunitionKitComponent', () => {
  let component: OPSFAMAmmunitionKitComponent;
  let fixture: ComponentFixture<OPSFAMAmmunitionKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSFAMAmmunitionKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSFAMAmmunitionKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

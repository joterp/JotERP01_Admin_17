import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OPSTransferFromKitAddComponent } from './ops-transfer-from-kit-add.component';



describe('OPSTransferFromKitAddComponent', () => {
  let component: OPSTransferFromKitAddComponent;
  let fixture: ComponentFixture<OPSTransferFromKitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSTransferFromKitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSTransferFromKitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

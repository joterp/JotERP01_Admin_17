import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopyCertificatesModelComponent } from './copy-certificates-model.component';



describe('CopyCertificatesModelComponent', () => {
  let component: CopyCertificatesModelComponent;
  let fixture: ComponentFixture<CopyCertificatesModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyCertificatesModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCertificatesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

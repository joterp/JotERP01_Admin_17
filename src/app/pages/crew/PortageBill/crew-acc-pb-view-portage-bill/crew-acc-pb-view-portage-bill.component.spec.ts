import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWACCPBViewPortageBillComponent } from './crew-acc-pb-view-portage-bill.component';

describe('CREWACCPBViewPortageBillComponent', () => {
  let component: CREWACCPBViewPortageBillComponent;
  let fixture: ComponentFixture<CREWACCPBViewPortageBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWACCPBViewPortageBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWACCPBViewPortageBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

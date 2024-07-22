import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmBroadcastMessageComponent } from './hrm-broadcast-message.component';

describe('HrmBroadcastMessageComponent', () => {
  let component: HrmBroadcastMessageComponent;
  let fixture: ComponentFixture<HrmBroadcastMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmBroadcastMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmBroadcastMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

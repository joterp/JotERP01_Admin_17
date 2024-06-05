import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fury-crew-pay-slips',
  templateUrl: './crew-pay-slips.component.html',
  styleUrls: ['./crew-pay-slips.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CREWPaySlipsComponent implements OnInit {

  panelOpenState = false;
  icon: boolean = false;

  PaymentDetails=[{
    month:"April",
    year:2023
  },
  {
    month:"March",
    year:2023
  },
]
  constructor() { }

  ngOnInit(): void {

  }

  

click(){
    this.icon = !this.icon;
  }

}

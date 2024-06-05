import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-fleet-location-map',
  templateUrl: './ops-fleet-location-map.component.html',
  styleUrls: ['./ops-fleet-location-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSFleetLocationMapComponent implements OnInit {
  authGuard: AuthGuard;

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;



  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Fleet Location Map`);
     }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}

/*------------------------------------------
--------------------------------------------
move()
--------------------------------------------
--------------------------------------------*/
move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}
  

}

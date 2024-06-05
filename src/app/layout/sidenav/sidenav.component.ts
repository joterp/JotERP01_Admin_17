import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SidenavItem } from "./sidenav-item/sidenav-item.interface";
import { SidenavService } from "./sidenav.service";
import { ThemeService } from "../../../@fury/services/theme.service";

// import { ApiService } from "../../providers/services/ApiService";
// import { AuthGuard } from "src/app/providers/auth/AuthGuard";

@Component({
  selector: "fury-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit, OnDestroy {
  sidenavUserVisible$ = this.themeService.config$.pipe(
    map((config) => config.sidenavUserVisible)
  );

  @Input()
  @HostBinding("class.collapsed")
  collapsed: boolean;

  @Input()
  @HostBinding("class.expanded")
  expanded: boolean;

  items$: Observable<SidenavItem[]>;
  user_data: object = {};
  menu_list: Array<object> = [];

  constructor(
    private sidenavService: SidenavService,
    private themeService: ThemeService,

  ) {}

  ngOnInit() {
    // setInterval(() => {
    //   let endTime = new Date();
    //   let startTime = localStorage.getItem("session");
    //   let sessionSync = localStorage.getItem("session_sync");
    //   let difference = endTime.getTime() - parseInt(startTime || "0");
    //   let syncDiff = endTime.getTime() - parseInt(sessionSync || "0");
    //   let resultInMinutes = Math.round(difference / 60000);
    //   let syncBeforeMinutes = Math.round(syncDiff / 60000);
    //   if (resultInMinutes < 60 && syncBeforeMinutes > 45) {
    //     this.api.GetDataService("reset/token").subscribe((res) => {
    //       if (res["Status"] === 200) {
    //         localStorage.setItem(
    //           "session_sync",
    //           new Date().getTime().toString()
    //         );
    //         localStorage.setItem(
    //           "AdminData",
    //           JSON.stringify({
    //             user_data: res["Data"],
    //           })
    //         );
    //       }
    //     });
    //   } else {
    //     console.log("No Activity in 1 hour OR Sync already");
    //   }
    // }, 1000 * 65);
    // this.user_data = JSON.parse(localStorage.getItem("AdminData")).user_data;
    this.addItems();
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) =>
        this.sidenavService.sortRecursive(items, "position")
      )
    );
  }

  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }

  @HostListener("mouseenter")
  @HostListener("touchenter")
  onMouseEnter() {
    this.sidenavService.setExpanded(true);
  }

  @HostListener("mouseleave")
  @HostListener("touchleave")
  onMouseLeave() {
    this.sidenavService.setExpanded(false);
  }

  ngOnDestroy() {}

  addItems() {
    let currentTime: number = new Date().getMilliseconds();
    let expiryTime: number = parseInt(localStorage.getItem("expiryTime"));

    // if (!expiryTime || currentTime > expiryTime) {
    //   this.sidenavService.resetItems();
    //   this.api.GetDataService("um/get").subscribe((res) => {

    //     let currentTime: any = new Date().getMilliseconds() + 30 * 60000;
    //     localStorage.setItem("user_menu_list", JSON.stringify(res["Data"]));
    //     localStorage.setItem("expiryTime", currentTime);
    //     this.loadMenuItems(res["Data"]);
    //   });
    // } else {
    //   let res = JSON.parse(localStorage.getItem("user_menu_list"));
    //   this.loadMenuItems(res);
    // }

    this.loadMenuItems();
  }
  loadMenuItems() {
  
    // var user_menu = res.filter(
    //   (u: any) => u.USER_GUID == this.user_data["USER_GUID"]
    // );
    // if (
    //   // this.auth.checkPermission(
    //   //   "oPk6Fh2BP24443f12-c950-46b3-b22c-dashb",
    //   //   "visible-menu"
    //   // )
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "Home",
          icon: "home",
          // routeOrFunction: "/dashboard",
          position: 1,
          pathMatchExact: true,
        },
      ]);
    }
// adding routing for deployer

// if (
//   this.auth.checkPermission(
//     "oPk6Fh2BP24443f12-c950-46b3-b22c-dashb",
//     "visible-menu"
//   )
// ) 
{
  this.sidenavService.addItems([
    {
      name: "Calendar",
      icon: "calendar_today",
      // routeOrFunction: "/deployer",
      position: 1,
      pathMatchExact: true,
    },
  ]);
}
// 

    //   if (
    //   this.auth.checkPermission(
    //     "pdPlT5Ckw88de8902-a751-404c-baa0-e47419703745",
    //     "visible-menu"
    //   )
    // ) 
    
    {
      this.sidenavService.addItems([
        {
          name: "My Shortcuts",
          icon: "screen_share",
          // routeOrFunction: "/objects/view/all",
          position: 3,
          pathMatchExact: true,
        },
      ]);
    }
    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-b22c-fff14f4d9ed1",
    //     "visible-menu"
    //   )
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "My Emails",
          icon: "email",
          // routeOrFunction: "/planner/view/all",
          position: 3,
          pathMatchExact: true,
        },
      ]);
    }

    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-b22c-boat",
    //     "visible-menu"
    //   )
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "My Vessels",
          icon: "directions_boat",
          // routeOrFunction: "/planner/boat-log/all",
          position: 5,
          pathMatchExact: true,
        },
      ]);
    }
    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-c34esrr-crew",
    //     "visible-menu"
    //   )
    // )
     {
      this.sidenavService.addItems([
        {
          name: "My Profile",
          icon: "account_circle",
          // routeOrFunction: "/planner/crew-log/all",
          position: 6,
          pathMatchExact: true,
        },
      ]);
    }
    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-b22c-followup",
    //     "visible-menu"
    //   )
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "Help",
          icon: "help_outline",
          routeOrFunction: "/followup/view/all",
          position: 7,
          pathMatchExact: true,
        },
      ]);
    }

    // if (
    //   this.auth.checkPermission("oPk6Fh2BP24443f12-see41aaaa", "visible-menu")
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "Application Settings",
          icon: "settings",
          // routeOrFunction: "/support-ctm/ctm-view-all",
          position: 8,
          pathMatchExact: true,
        },
      ]);
    }

    // if (
    //   this.auth.checkPermission("oPk6Fh2BP24443f12-see41bbbb", "visible-menu")
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "Change Log",
          icon: "insert_drive_file",
          // routeOrFunction: "/support-logistics/view/all",
          position: 9,
          pathMatchExact: true,
        },
      ]);
    }

    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-fda-list",
    //     "visible-menu"
    //   )
    // ) 
    {
      this.sidenavService.addItems([
        {
          name: "Change Password",
          icon: "lock",
          // routeOrFunction: "/fda/view/all",
          position: 10,
          pathMatchExact: true,
        },
      ]);
    }
    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-trans-index",
    //     "visible-menu"
    //   )
    // ) 
    // {
    //   this.sidenavService.addItems([
    //     {
    //       name: "Transport Log",
    //       icon: "directions_bus",
    //       routeOrFunction: "/planner/transport/all",
    //       position: 4,
    //       pathMatchExact: true,
    //     },
    //   ]);
    // }
    // if (
    //   this.auth.checkPermission(
    //     "oPk6Fh2BP24443f12-c950-46b3-add-service",
    //     "visible-menu"
    //   )
    // )
    //  {
    //   this.sidenavService.addItems([
    //     {
    //       name: "Add Service",
    //       icon: "note_add",
    //       routeOrFunction: "/planner/add-service",
    //       position: 2,
    //       pathMatchExact: true,
    //     },
    //   ]);
    // }
    // var reports = {
    //   name: "Reports",
    //   icon: "format_list_bulleted",
    //   position: 13,
    //   subItems: [],
    // };

    // var library = {
    //   name: "Libraries",
    //   icon: "format_list_bulleted",
    //   position: 12,
    //   subItems: [],
    // };
    // var us = {
    //   name: "Administration",
    //   icon: "folder",
    //   position: 14,
    //   subItems: [],
    // };

    // user_menu.forEach((m: any) => {
      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-see42ee") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Vessel Schedule"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Vessel Schedule",
      //         routeOrFunction: "/reports/view/all",
      //         position: 13,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }

      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-see42ff") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Planner Historical Report"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Planner Historical Report",
      //         routeOrFunction: "/historical-reports/view/all",
      //         position: 14,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-c950-46b3-b22c-ctm-report") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "CTM Historical"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "CTM Historical",
      //         routeOrFunction: "/support-ctm/ctm-report",
      //         position: 15,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }

      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-c950-46b3-b22c-log-report") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Logistic Historical"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Logistic Historical",
      //         routeOrFunction: "/support-logistics/logistics-report",
      //         position: 16,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "Fh2BP24443f12-reports-logi-item-wise") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Logistic Historical Item-wise"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Logistic Historical Item-wise",
      //         routeOrFunction: "/support-logistics/logistics-report-item-wise",
      //         position: 16,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }

      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-c950-46b3-fda-repot") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "FDAs Historical"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "FDAs Historical",
      //         icon: "note_add",
      //         routeOrFunction: "/fda/history-report",
      //         position: 17,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-c950-46b3-vendor-report") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Vendor Invoice Report"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Vendor Invoice Report",
      //         icon: "note_add",
      //         routeOrFunction: "/reports/vendor-invoice/report",
      //         position: 17,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "Fh2BP24443f12-reports-cost-report") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Principal Cost Report"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Principal Cost Report",
      //         routeOrFunction: "/reports/principal-cost-report",
      //         position: 18,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "Fh2BP24443f12-reports-cost-report") {
      //   if (m.MENU_ACCESS) {
      //     var prt = reports.subItems.filter(
      //       (s: any) => s.name == "Principal Report"
      //     );
      //     if (prt.length == 0) {
      //       reports.subItems.push({
      //         name: "Principal Report",
      //         routeOrFunction: "/reports/principal-report",
      //         position: 19,
      //         pathMatchExact: true,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "D1LvEgnlqab8e66c6-634e-4cc4-abc2-140c1bd9cb31") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Companies");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Companies",
      //         routeOrFunction: "/company/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "vSD3Vxzfgbeec9415-13f4-494c-8818-09722e45d361") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Server List");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Server List",
      //         routeOrFunction: "/server/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "J04tlhz3xf12ea069-46f5-4fb6-a366-00f8670a1b60") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Client List");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Client List",
      //         routeOrFunction: "/client/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }

      // if (m.MENU_GUID == "8SalaGYdAeb192040-54a2-4b1a-97a2-3fd63f2bb389") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Vessels");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Vessels",
      //         routeOrFunction: "/vessel/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "6610OnftPc4daaf9e-5aa7-4061-940c-6b0cbb1dc012") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter(
      //       (s: any) => s.name == "System Parameters"
      //     );
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "System Parameters",
      //         routeOrFunction: "/system-parameter/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "BX2GdXyHoa0f9c0b2-2049-43f2-a068-656eeaab1c10") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Countries");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Countries",
      //         routeOrFunction: "/country/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "ueiDydH186d51831f-2dc3-41fe-a91d-23f41134d8ef") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Currencies");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Currencies",
      //         routeOrFunction: "/currency/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "ueiDydH186d51831f-2dc3-41fe-a91d-23f41134d8ef") {
      //   if (m.MENU_ACCESS) {
      //     var prt = library.subItems.filter((s: any) => s.name == "Ports");
      //     if (prt.length == 0) {
      //       library.subItems.push({
      //         name: "Ports",
      //         routeOrFunction: "/port/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }

      // if (m.MENU_GUID == "8rOQRUXHO23358236-982e-4cc0-a482-d111ffcf1777") {
      //   if (m.MENU_ACCESS) {
      //     var prt = us.subItems.filter((s: any) => s.name == "Users");
      //     if (prt.length == 0) {
      //       us.subItems.push({
      //         name: "Users",
      //         routeOrFunction: "/users/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "8rOQRUXHO23358236-982e-4cc0-a482-d111ffcf1777") {
      //   if (m.MENU_ACCESS) {
      //     var prt = us.subItems.filter((s: any) => s.name == "Users");
      //     if (prt.length == 0) {
      //       us.subItems.push({
      //         name: "Users",
      //         routeOrFunction: "/users/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "f1noUG3H2fa067431-b181-4dac-8144-25d4888a051c") {
      //   if (m.MENU_ACCESS) {
      //     var prt = us.subItems.filter(
      //       (s: any) => s.name == "User-Menu Relationship"
      //     );
      //     if (prt.length == 0) {
      //       us.subItems.push({
      //         name: "User-Menu Relationship",
      //         routeOrFunction: "/users-menu/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "f1noUG3H2fa067431-b181-4dac-8144-25d4888a051c") {
      //   if (m.MENU_ACCESS) {
      //     var prt = us.subItems.filter(
      //       (s: any) => s.name == "Server"
      //     );
      //     if (prt.length == 0) {
      //       us.subItems.push({
      //         name: "Server",
      //         routeOrFunction: "/users-menu/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
      // if (m.MENU_GUID == "f1noUG3H2fa067431-b181-4dac-8144-25d4888a051c") {
      //   if (m.MENU_ACCESS) {
      //     var prt = us.subItems.filter(
      //       (s: any) => s.name == "Client"
      //     );
      //     if (prt.length == 0) {
      //       us.subItems.push({
      //         name: "Client",
      //         routeOrFunction: "/users-menu/view/all",
      //         position: 10,
      //       });
      //     }
      //   }
      // }

      // if (m.MENU_GUID == "oPk6Fh2BP24443f12-app-setting") {
      //   if (m.MENU_ACCESS) {
      //     var set = us.subItems.filter((s: any) => s.name == "App Setting");
      //     if (set.length == 0) {
      //       us.subItems.push({
      //         name: "App Setting",
      //         routeOrFunction: "/setting/index",
      //         position: 10,
      //       });
      //     }
      //   }
      // }
    // });
    // var item_order = [
    //   "Server List",
    //   "Client List",
    //   "Countries",
    //   "System Parameters"
    // ];
    // var ad_order = ["Users", "User-Menu Relationship", "App Setting"];
    // var new_order = [];
    // var ad_new_order = [];
    // item_order.forEach((i: string) => {
    //   library.subItems.forEach((s: object) => {
    //     if (i == s["name"]) {
    //       new_order.push(s);
    //     }
    //   });
    // });
    // ad_order.forEach((i: string) => {
    //   us.subItems.forEach((s: object) => {
    //     if (i == s["name"]) {
    //       ad_new_order.push(s);
    //     }
    //   });
    // });
    // if (ad_new_order.length > 0) {
    //   us.subItems = ad_new_order;
    // }
    // if (new_order.length > 0) {
    //   library.subItems = new_order;
    // }

    // if (library.subItems.length > 0) {
    //   us.subItems.push({
    //     name: library.name,
    //     icon: library.icon,
    //     position: library.position,
    //     subItems: library.subItems,
    //   });
    // }

    // if (!this.sidenavService.checkItem(us) && us.subItems.length > 0) {
    //   this.sidenavService.addItems([
    //     {
    //       name: us.name,
    //       icon: us.icon,
    //       position: us.position,
    //       subItems: us.subItems,
    //     },
    //   ]);
    // }

    // if (
    //   !this.sidenavService.checkItem(reports) &&
    //   reports.subItems.length > 0
    // ) {
      // this.sidenavService.addItems([
      //   {
      //     name: reports.name,
      //     icon: reports.icon,
      //     position: reports.position,
      //     subItems: reports.subItems,
      //   },
      // ]);
    

    this.sidenavService.addItems([
      {
        name: "Logout",
        icon: "logout",
        position: 16,
        routeOrFunction: "/login",
        pathMatchExact: true,
      },
    ]);
  }
}


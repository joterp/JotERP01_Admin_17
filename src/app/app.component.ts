import { DOCUMENT } from "@angular/common";
import { Component, Inject, Renderer2 } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { SidenavService } from "./layout/sidenav/sidenav.service";
import { ThemeService } from "../@fury/services/theme.service";
import { ActivatedRoute } from "@angular/router";
import { filter } from "rxjs/operators";
import { Platform } from "@angular/cdk/platform";
import { SplashScreenService } from "../@fury/services/splash-screen.service";

import { ApiService } from "./providers/services/ApiService";
import { CommonService } from "./providers/services/CommonService";

@Component({
  selector: "fury-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(
    private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService,
    public api: ApiService,
    public common:CommonService
  ) {
    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has("style")))
      .subscribe((queryParamMap) =>
        this.themeService.setStyle(queryParamMap.get("style"))
      );

    this.iconRegistry.setDefaultFontSetClass("material-icons-outlined");
    this.themeService.theme$.subscribe((theme) => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, "is-blink");
    }
  }

  getSystemParams() {
    this.api.GetDataService("purc/sp/all").subscribe(
      (res: any) => {
        console.log(res,"ressyspara")
        if (res["Status"] === 200) {
          const sysparam = res["Data"]
            .filter((item) => 1 === item["Active_Status"])
            console.log(sysparam,"purc_sysparam")
          localStorage.setItem("systemParamsData", JSON.stringify(sysparam));
      
        } else {
          this.common.ShowMessage(res.Message, "notify-error", 4000);
        }
      },
    );
  }
}

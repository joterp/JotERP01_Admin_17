import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ApiService } from "./ApiService";
import { CommonService } from "../../providers/services/CommonService";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public app: ApiService,
    private common: CommonService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const tokenData = localStorage.getItem("AdminData");
    // if (tokenData) {
    //   // let userData = JSON.parse(tokenData).user_data;
    //   console.log("URL", request.url, request.url.includes("reset/token"));
    //   if (!request.url.includes("reset/token")) {
    //     console.log("setting session");
    //     localStorage.setItem("session", new Date().getTime().toString());
    //   }
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: "Bearer " + userData.accessToken,
    //     },
    //   });
    // }

    if (!request.headers.has("Content-Type")) {
      request = request.clone({
        setHeaders: {
          "content-type": "application/json",
        },
      });
    }

    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });
    // return next.handle(request).pipe(
    //   map((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //      event = event.clone({ body: event.body });
    //     }
    //     if (event instanceof HttpErrorResponse) {
    //       if (event.error.message == "Unauthorized" || event.status === 401) {
    //         localStorage.clear();
    //         this.router.navigate(["login"]);
    //       }
    //     }
    //     return event;
    //   })
    // );
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log("catchError", err);
        if (err.error.message == "Unauthorized" || err.status === 401) {
          localStorage.clear();
          this.router.navigate(["login"]);
        } else {
          console.log("valid token");
        }
        return throwError(err);
      })
    );
  }
}

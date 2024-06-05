import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  prod_url = "https://magentis2.joterp.online/";
  // API_URL: string = 'https://magentis2.joterp.online/api/';
  production = false;
  host = window.location.protocol + "//" + window.location.host;
  API_HOST: string = window.location.host.includes("localhost")
    ? "http://localhost:3003/upload/ctm/"
    : `${this.prod_url}upload/ctm/`;

  API_URL: string =
    !this.production && window.location.host.includes("localhost")
      ? "http://localhost:3005/api/"
      : `${this.prod_url}api/`;
  USER = localStorage.getItem("AdminData");

  // for json server NEW ADDED
  API_JSON_URL = "http://localhost:3000/"



  constructor(private http: HttpClient) {
    console.log("ApiService", this.host);
  }

  public GetDataService(path: string) {
    const url = this.API_URL + path;
    return this.http.get(url);
  }

  public PostDataService(path: string, data: object) {
    const url = this.API_URL + path;
    return this.http.post(url, data);
  }

  public PutDataService(path: string, data: object) {
    const url = this.API_URL + path;
    return this.http.put(url, data);
  }

  public DeleteDataService(path: string, data = null) {
    const url = this.API_URL + path;
    return this.http.delete(url, { body: data });
  }

  public FormPostApi(path: string, data: any) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + JSON.parse(this.USER)?.accessToken
    );

    var requestOptions: object = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    const url = this.API_URL + path;
    return fetch(url, requestOptions);
  }

    // for json server NEW ADDED
  public GetDataService1(path: string) {
    const url = this.API_JSON_URL + path;
    return this.http.get(url);
  }

  public PostDataService1(path: string, data: object) {
    const url = this.API_JSON_URL + path;
    return this.http.post(url, data);
  }

  public PutDataService1(path: string, data: object) {
    const url = this.API_JSON_URL + path;
    return this.http.put(url, data);
  }

  public DeleteDataService1(path:string, id:number) {
    const url = this.API_JSON_URL + path;
    return this.http.delete(`${url}/${id}`);
  }

  
}

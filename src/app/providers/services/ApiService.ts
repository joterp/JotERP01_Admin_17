import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, Subject, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  subscribe(arg0: (id: number) => void) {
    throw new Error('Method not implemented.');
  }

 private url = 'http://localhost:5062/graphql/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NzY4OTUyLCJleHAiOjE3MTg3OTg5NTIsImlhdCI6MTcxODc2ODk1MiwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.tE-PlW5N3NN-kUwsJcrYewI0afy2kHtx1L2YCRgQi_M';
  prod_url = "https://magentis2.joterp.online/";
  // API_URL: string = 'https://magentis2.joterp.online/api/';
  production = false;
  host = window.location.protocol + "//" + window.location.host;
  API_HOST: string = window.location.host.includes("localhost")
    ? "http://localhost:3003/upload/ctm/"
    : `${this.prod_url}upload/ctm/`;

  API_URL: string =
    !this.production && window.location.host.includes("localhost")
      ? "http://localhost:5062/api/"
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

  // public PostDataService(path: string, data: object) {
  //   const url = this.API_URL + path;
  //   return this.http.post(url, data);
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE3NzMyNDQ3LCJleHAiOjE3MTc3NjI0NDcsImlhdCI6MTcxNzczMjQ0NywiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.Rf54AUalWHR0ps4sRsPwTLN-fyhUciLT4mJiRihfWy8" 
  // }
   getRanksData(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);

    const body = {
      query: '{ ranks { activeStatus addedBy addedByName addedOnDate contractDuration editedBy editedByName editedOnDate guid id isCadet isCadetSupervisor rankCategory rankName  rankShortCode sortSequence tenantId vesselDepartmentID}}'
    };

    return this.http.post(this.url, body, { headers: headers });
  }

  getRanksCategoryData(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);

    const body = {
      query: '{ rankCategory { addedBy addedByName addedOnDate editedBy editedByName editedOnDate guid id isTransient rankCategory tenantId}}'
    };

    return this.http.post(this.url, body, { headers: headers });
  }

  getGraphqlDataSignoff(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);
  
    const body = {
      query: `{ signOffReason { addedBy addedByName addedOnDate editedBy editedByName editedOnDate guid id isTransient sign_Off_Reason tenantId}}`
    };
  
    return this.http.post(this.url, body, { headers: headers });
  }

  getGraphqlDataAdditionalChecks(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);
  
    const body = {
      query: `{ manningFields { active_STATUS addedBy addedByName addedOnDate editedBy editedByName editedOnDate fields guid id isTransient manning_ID remark show_IN_PROFILE tenantId trait_TYPE trait_UNIT}}`
    };
  
    return this.http.post(this.url, body, { headers: headers });
  }

  getGraphqlDataInterviewQuesCategory(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);
  
    const body = {
      query: `{ crewInterviewQuestionsCategory { active_STATUS addedBy addedByName addedOnDate category_NAME editedBy editedByName editedOnDate guid id isTransient tenantId}}`
    };
  
    return this.http.post(this.url, body, { headers: headers });
  }
  
  getGraphqlDataInterviewGrade(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);
  
    const body = {
      query: `{ crewInterviewGradingOption { active_STATUS addedBy addedByName addedOnDate editedBy editedByName editedOnDate grade_ID guid id isTransient option_TEXT option_VALUE tenantId}}`
    };
  
    return this.http.post(this.url, body, { headers: headers });
  }
  


  getGraphqlDataInterviewQues(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.token}`);
  
    const body = {
      query: `{ crewInterviewQuestions { active_STATUS addedBy addedByName addedOnDate  answer category_ID editedBy editedByName editedOnDate grading_TYPE guid id interview_QUESTION isTransient tenantId}}`
    };
  
    return this.http.post(this.url, body, { headers: headers });
  }
  
  
  



  public PostDataService(path: string, data: object) {
    const url = this.API_URL + path;
    
    // Creating headers
    const headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NzY4OTUyLCJleHAiOjE3MTg3OTg5NTIsImlhdCI6MTcxODc2ODk1MiwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.tE-PlW5N3NN-kUwsJcrYewI0afy2kHtx1L2YCRgQi_M"
    });
  
    // Setting up request options
    const requestOptions = {
      headers: headers
    };
   // Sending HTTP POST request with data and headers
   return this.http.post(url, data, requestOptions);
  }
  
  

  public PutDataService(path: string, data: object) {
    const url = this.API_URL + path;
      // Creating headers
      const headers = new HttpHeaders({
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NzY4OTUyLCJleHAiOjE3MTg3OTg5NTIsImlhdCI6MTcxODc2ODk1MiwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.tE-PlW5N3NN-kUwsJcrYewI0afy2kHtx1L2YCRgQi_M"
      });
    
      // Setting up request options
      const requestOptions = {
        headers: headers
      };
    return this.http.put(url, data,requestOptions);
  }

  public DeleteDataService(path: string, id?: number) {
    let url = `${this.API_URL}${path}`;
    if (id !== undefined) {
        url += `?id=${id}`;
    }
    // Creating headers
    const headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NzY4OTUyLCJleHAiOjE3MTg3OTg5NTIsImlhdCI6MTcxODc2ODk1MiwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.tE-PlW5N3NN-kUwsJcrYewI0afy2kHtx1L2YCRgQi_M"
    });
  
    // Setting up request options
    const requestOptions = {
      headers: headers
    };

    return this.http.delete(url, requestOptions);
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


  public PostDaDeleteDataService1taService(path: string, data: object) {
    const url = this.API_URL + path;
    
    // Creating headers
    const headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NzY4OTUyLCJleHAiOjE3MTg3OTg5NTIsImlhdCI6MTcxODc2ODk1MiwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.tE-PlW5N3NN-kUwsJcrYewI0afy2kHtx1L2YCRgQi_M"
    });
  
    // Setting up request options
    const requestOptions = {
      headers: headers
    };
   // Sending HTTP POST request with data and headers
   return this.http.post(url, data, requestOptions);
  }

  public DeleteDataService1(path:string, id:number) {
    const url = this.API_JSON_URL + path;
    return this.http.delete(`${url}/${id}`);
  }

  postDataServiceWithSearch(
  path: string,
  obj: any
): Observable<HttpResponse<any>> {
  try {
    if (!path) {
      throw new Error('The path argument is required and cannot be undefined.');
    }

    // Log the API URL to debug
    console.log(`API URL: ${this.API_URL}${path}`);

    // Creating headers
    const headers = new HttpHeaders({
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiVGVuYW50SWQiOiIxIiwiVXNlck5hbWUiOiJBZG1pbiIsIlJlYWRBY2Nlc3MiOiJUcnVlIiwiVXBkYXRlQWNjZXNzIjoiVHJ1ZSIsIkRlbGV0ZUFjY2VzcyI6IlRydWUiLCJBcHByb3ZlQWNjZXNzIjoiRmFsc2UiLCJDcmVhdGVBY2Nlc3MiOiJUcnVlIiwibmJmIjoxNzE4NzY4OTUyLCJleHAiOjE3MTg3OTg5NTIsImlhdCI6MTcxODc2ODk1MiwiaXNzIjoiZU5peC5Kb3RFUlAuY29tLklzc3VlciIsImF1ZCI6ImVOaXguSm90RVJQLmNvbS5BdWRpZW5jZSJ9.tE-PlW5N3NN-kUwsJcrYewI0afy2kHtx1L2YCRgQi_M"
    });

    // Setting up request options
    const requestOptions = {
      observe: 'response' as 'response',
      headers: headers
    };

    return this.http
      .post<any>(
        `${this.API_URL}${path}`,
        obj,
        requestOptions
      )
      .pipe(catchError(this.handleError));
  } catch (err: any) {
    console.error('Error in postDataServiceWithSearch:', err.message);
    throw new Error(err);
  }
}

  

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  get getAuthHeader() {
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(this.USER)?.accessToken
    };
  }

}

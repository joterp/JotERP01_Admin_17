import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private _http: HttpClient) {}

   addUnits(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/units', data);
  }

   editUnits(unitId: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/units/` + unitId, data);
  }

  getUnits(): Observable<any> {
    return this._http.get('http://localhost:3000/units');
  }
   
  deleteUnits(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/units/${id}`);
   }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiurl = "http://localhost:5000/users"

@Injectable()
export class UserserviceService {
  constructor(private http: HttpClient) { }

  registerUser(data: any) {
   return this.http.post(`${apiurl}/register`, data);
  }

}

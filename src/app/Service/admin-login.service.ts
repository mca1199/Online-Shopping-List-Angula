import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

  PostloginAdmin(admin:Admin):Observable<object>
  {
    let url="http://localhost:8080/adminLogin";
    console.log(admin)
    return this.http.post<any>(url,admin);

  }
}

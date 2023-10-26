import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService {

  constructor(private http:HttpClient) { }
  postRegistration(data:any)
  {
    let url="http://localhost:8080/registration";
    return this.http.post(url,data);
  }
  

}

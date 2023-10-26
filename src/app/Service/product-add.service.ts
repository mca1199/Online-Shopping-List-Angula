import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductAddService {

  constructor(private http:HttpClient ) { }
  products()
  {
    let url="http://localhost:8080/findAllProduct";
    return this.http.get(url);
  }
getproduct(){
  let url="http://localhost:8080/getProduct";
    return this.http.get(url);
}

  postProducts(data:any)
  {
    let url="http://localhost:8080/addProduct";
    return this.http.post(url,data);
  }
}

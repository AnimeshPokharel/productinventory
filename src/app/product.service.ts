import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }

 public getAllProducts(){
   return this.http.get('http://localhost:8080/products');
 }

 public saveProduct(prod: Product){
   return this.http.post("http://localhost:8080/save",prod);
 }

 public deleteProduct(pid:number){
  return this.http.delete("http://localhost:8080/delete/"+pid);
 
}
}

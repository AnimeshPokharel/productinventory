import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   ROOT_URL:String="https://springproduct-env.eba-amxg7uib.us-east-2.elasticbeanstalk.com";

  constructor(private http:HttpClient) { 
  }

 public getAllProducts(){
   return this.http.get(this.ROOT_URL+"/products");
 }

 public saveProduct(prod: Product){
   return this.http.post(this.ROOT_URL+"/save",prod);
 }

 public deleteProduct(pid:number){
  return this.http.delete(this.ROOT_URL+"/delete/"+pid);
 
}
}

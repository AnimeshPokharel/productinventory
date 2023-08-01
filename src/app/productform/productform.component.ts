import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {


 constructor(private productService:ProductService){}

 saveProduct(data: Product){
  this.productService.saveProduct(data).subscribe(d=>console.log("Product Saved"));
 }


}



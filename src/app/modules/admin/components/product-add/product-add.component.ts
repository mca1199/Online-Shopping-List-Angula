import { Component } from '@angular/core';
import { ProductAddService } from 'src/app/Service/product-add.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  title = 'Product_List';
  products:any;
  constructor(private productData:ProductAddService){
    this.productData.products().subscribe((data)=>{
      this.products =data;
    });
    
  }
  getProductsFromData(data:any){
    console.warn(data)
    this.productData.postProducts(data).subscribe((productdata)=>{
    console.warn(productdata);
      
    })
  }
}

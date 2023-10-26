import { Component } from '@angular/core';
import { ProductAddService } from 'src/app/Service/product-add.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {

  title = 'Product_List';
  products:any=[];
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
  getProduct(data:any){
    console.warn(data)
    this.productData.getproduct().subscribe((productdata)=>{ 
    console.warn(data);
      
    })
  }
 
}

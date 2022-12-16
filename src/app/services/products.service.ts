import { Injectable } from '@angular/core';
import { Product, products } from 'src/data/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  /*/  VARS  /*/
  private allProducts = products;


  /*/  FUNCTIONS  /*/

  // return full list of products divided by category
  getAllProducts() {
    return this.allProducts;
  }

  // return full list of products of specific category
  getAllProductsByCategory(category: string){
    return this.allProducts.filter(item => item.category == category)[0].items
  }

  

}
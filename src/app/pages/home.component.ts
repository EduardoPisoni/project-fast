import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    console.log(this.productsService.getAllProducts())
    console.log(this.productsService.getAllProductsByCategory('smartphones'))
  }

}


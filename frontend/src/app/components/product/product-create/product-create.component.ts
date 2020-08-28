import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service'; //improtando o serviço 

import { Router } from '@angular/router'; //importando rota
import { Product } from '../product.model';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name:'test produtionn',
    price: 130.60
  }

  constructor(private productService: ProductService, private router: Router) { } //injetando um serviço

  ngOnInit(): void {

  }
  //metodo que vai criar o produto 27/08/2020
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado...') // messagem criaçao de produtos 27/08/2020
      this.router.navigate(['/products'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}

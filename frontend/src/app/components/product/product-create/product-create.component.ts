import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service'; //improtando o serviço 

import { Router } from '@angular/router'; //importando rota


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { } //injetando um serviço

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.showMessage('produto criado') // metodo para criar produtos
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}

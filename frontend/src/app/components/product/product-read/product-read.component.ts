import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model'; //

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] //declarando o array de produto
  displayedColumns = ['id', 'name', 'price', 'action']// inserindo colunas na tabela

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //metodo que vai ler um array d produtos
    this.productService.read().subscribe(products =>{ //
      this.products = products
      console.log(products);
      
    })
  }

}

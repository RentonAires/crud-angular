import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  //atributo  produto do tipo produto
  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  //preenchendo os dados no campo na inicializaçao
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') //chamando o service e recebendo o id atravez da navegaçao
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  //15/09/2020
  updateProduct(): void {
    this.productService.update(this.product).subscribe(product => {
      this.productService.showMessage("Produto Atualizado com Sucesso!")
      this.router.navigate(["/products"])
    })
  }

  

  //
  cancel(): void {
    this.router.navigate(["/products"])
  }
}

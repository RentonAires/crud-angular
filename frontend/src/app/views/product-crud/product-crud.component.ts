import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router' // importando a rota Para criar navegaçao

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor( private router: Router) { } //criando rota de navegaçao

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']) //caminha da nagegaçao em forma de EventBind
    
  }

}

import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"//url do servidor para criaçao de produto 27/08/2020

  constructor(private snacBar: MatSnackBar, private  http: HttpClient) { }
  //configurando o snackbar 
  showMessage(msg: string): void {
    this.snacBar.open(msg, 'fechar', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top" 
    })
    
  }
  //metodo que envia produto para para o back-end servidor db.json 27/08/2020
  create(product: Product): Observable <Product>{
    return this.http.post<Product>(this.baseUrl,  product)
  }
  
}

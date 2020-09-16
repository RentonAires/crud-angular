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


  //metodo para ler produto do back-end e entregar na tela
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  //metodo para ler o id do produto do back-end e entregar na tela 15/09/2020
  readById(id: string):Observable<Product> {
    const url = `${this.baseUrl}/${id}`// pegando so numero do id da url
    return this.http.get<Product>(url)
  }

  //metodo para atualizar produto do back-end e entregar na tela
  update(product: Product):Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

}

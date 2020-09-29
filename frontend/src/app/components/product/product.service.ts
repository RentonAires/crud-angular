import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"//url do servidor para criaçao de produto 27/08/2020

  constructor(private snacBar: MatSnackBar, private http: HttpClient) { }
  //configurando o snackbar caixa de alerta de criaçao, atualizaçao e excluçao de produto
  showMessage(msg: string, isError: boolean = false): void {
    this.snacBar.open(msg, 'fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] 
    })

  }
  //metodo que envia produto para para o back-end servidor db.json 27/08/2020
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj), //recebendo um objeto e retornando o mesmo objeto
      catchError(e => this.errorHandler(e)) //tratamento de erro
    );
  }

  
  //metodo para ler produto do back-end e entregar na tela
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj), //recebendo um objeto e retornando o mesmo objeto
      catchError(e => this.errorHandler(e)) //tratamento de erro
    );
  }

  //metodo para ler o id do produto do back-end e entregar na tela 15/09/2020
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`// pegando so numero do id da url
    return this.http.get<Product>(url).pipe(
      map(obj => obj), //recebendo um objeto e retornando o mesmo objeto
      catchError(e => this.errorHandler(e)) //tratamento de erro
    );
  }

  //metodo para atualizar produto do back-end e entregar na tela
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj), //recebendo um objeto e retornando o mesmo objeto
      catchError(e => this.errorHandler(e)) //tratamento de erro
    );
  }

  //
  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj), //recebendo um objeto e retornando o mesmo objeto
      catchError(e => this.errorHandler(e)) //tratamento de erro
    );
  }

  //metodo que trata o erro
  errorHandler(e: any): Observable<any>{
    console.log(e);
    
    this.showMessage("Ocorreu um erro!", true)//mostrando mesagem de error
    return EMPTY //retronado erro vazio
  }


}

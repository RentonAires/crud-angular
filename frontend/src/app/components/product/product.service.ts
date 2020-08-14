import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snacBar: MatSnackBar) { }
  //configurando o snackbar 
  showMessage(msg: string): void {
    this.snacBar.open(msg, 'fechar', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top" 
    })
    
  }
}

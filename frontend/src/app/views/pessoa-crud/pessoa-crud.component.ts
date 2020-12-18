import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-crud',
  templateUrl: './pessoa-crud.component.html',
  styleUrls: ['./pessoa-crud.component.css']
})
export class PessoaCrudComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  navigateToPessoaCreate(): void {
    console.log('navegando...');
    this.router.navigate(['/pessoas/create'])
    
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService} from '../services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Drink {
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string
}

@Component({
  selector: 'app-meu-segundo',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers:[ProductService],
  templateUrl: './meu-segundo.component.html',
  styleUrl: './meu-segundo.component.css'
})
export class MeuSegundoComponent {
  modulename = "suplier";

  changemodule(event: any){
    this.modulename = event.target.value;
  }

  customerlist = signal([
    {id: 1, name : 'ana', country: 'brasil'},
    {id: 2, name : 'carlos', country: 'portugal'},
    {id: 3, name : 'luis', country: 'italia'},
    {id: 4, name : 'maria', country: 'brasil'},
  ]);

  supplierlist=signal([{id: 1, name : 'ana', country: 'brasil'}]);

  userlist = signal([
    {id: 1, name : 'ana', country: 'brasil'},
    {id: 2, name : 'carlos', country: 'portugal'},
    {id: 3, name : 'luis', country: 'italia'},
    {id: 4, name : 'maria', country: 'brasil'},
    {id: 5, name : 'carmen', country: 'espanha'},
  ]);
  
  // productList$: Observable<Drink[]> = new Observable<Drink[]>();

  // constructor(private productService: ProductService ){ }

  // ngOnInit(): void{

  //   this.productList$ = this.productService.fecthData('lemon').pipe{
  //     map((response) => {
  //       return response.drinks;
  //     })

  //   };
  // }
}
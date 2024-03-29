import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  propLegal = "qualquer"
  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router){ }

  ngOnInit(): void{
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Produto Criado com Sucesso!.')
      this.router.navigate(['/products'])
    })
   
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

  fazerAlgo(): void{
    console.log('Fazendo Algo!')
  }

}

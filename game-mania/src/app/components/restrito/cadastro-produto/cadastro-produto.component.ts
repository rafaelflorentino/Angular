import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../../produto.service';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {
 public produto: Produto = new Produto(0,"","","",0);

 constructor(private _produtoService:ProdutoService, private _router: Router){
  
 }

  cadastrar():void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","","",0);
        alert("cadastrado efetuado com Sucesso");
      },
      err =>{
        alert("Erro ao cadastrar");
      }
    );

    this._router.navigate(["restrito/lista"]);
  }
}

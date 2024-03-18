import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../../produto.service';


@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.scss'
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService:ProdutoService, private _router:Router){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto =>{
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }

  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => {alert("Erro ao Excluir")}
    );

      this._router.navigate(["/restrito/lista"]);

  }
}

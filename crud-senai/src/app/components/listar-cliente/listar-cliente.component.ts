import { ClienteService } from './../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../models/Cliente.model';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterOutlet, RouterModule, MatButtonModule, MatToolbarModule, HttpClientModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.scss'
})
export class ListarClienteComponent {
  public clientes: Cliente[] = [];

  constructor(private _clienteService:ClienteService, private _router:Router){}

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes():void{
    this._clienteService.getClientes().subscribe(
      retornaCliente =>{
        this.clientes = retornaCliente.map(
          item => {
            return new Cliente(
              item.id,
              item.nome,
              item.endereco
            );
          }
        )
      }
    )
  } 

}

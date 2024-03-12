import { Component } from '@angular/core';
import { Cliente } from '../models/Cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.scss'
})
export class CadastrarClienteComponent {
  public cliente: Cliente = new Cliente(0,"","");

  constructor(private _clienteService:ClienteService, private _router: Router){}

  cadastrar():void{
    this._clienteService.cadastrarCliente(this.cliente).subscribe(
    cliente => {
      this.cliente = new Cliente(0,"","");
      alert("Cadastro Efetuado com sucesso");
    },
    err => {
      alert("Erro ao Cadastrar");
    }
    );
      this._router.navigate(["/listar"]);
  }
}

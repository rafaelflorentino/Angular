import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atualizar-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atualizar-cliente.component.html',
  styleUrl: './atualizar-cliente.component.scss'
})
export class AtualizarClienteComponent {

  cliente = 0;

}

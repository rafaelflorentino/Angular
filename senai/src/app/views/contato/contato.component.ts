import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {
 public titulo!: string;


  onSubmit(form: NgForm){
    let dados = `
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.senha}
    `;

    console.log(dados);

  }
}

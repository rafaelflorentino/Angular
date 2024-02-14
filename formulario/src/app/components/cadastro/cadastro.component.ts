import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  formBuilder: FormBuilder = new FormBuilder();

  myForm: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });


  onSubmit() {
    if (this.myForm.valid) {
      console.log('Formulário válido! Dados:', this.myForm.value);
    } else {
      console.log('Formulário inválido! Corrija os campos.');
    }
  }
}


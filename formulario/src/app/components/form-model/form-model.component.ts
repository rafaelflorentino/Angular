import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.scss'
})
export class FormModelComponent {

  applyForm = new FormGroup({
    firstName: new FormControl('',  Validators.required),
    lastName: new FormControl('',  Validators.required),
    email: new FormControl('',  Validators.required),
  });


  submitApplication(){

    if (this.applyForm.valid) {
      console.log('Controle válido! Valor:', this.applyForm.value);
      
      console.log(this.applyForm.value.firstName);
      console.log(this.applyForm.value.lastName);
      console.log(this.applyForm.value.email);
    } else {
      console.log('Controle inválido! Corrija o valor.');
    }

  }
}

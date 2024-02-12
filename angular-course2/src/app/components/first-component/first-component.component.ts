import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  title = 'angular-course';
  dadoPai = 'nome do pai App.components.ts';
  pai ="App.components.ts";

  userData ={
    email: 'joao@gmail.com',
    role: 'Admin'
  }

  nome: string = 'Rafael';
  sobrenome = 'Florentino';
  hobbies= ['estudar', 'nadar', 'correr','viajar'];
  cars =[
    {
      name: "Polo",
      year: 2000
    },
    {
      name: "ferrari",
      year: 2024
    },
    {
      name: "Tesla",
      year: 2023
    },
]

falar(){
  return "Falando muito!";
}

}

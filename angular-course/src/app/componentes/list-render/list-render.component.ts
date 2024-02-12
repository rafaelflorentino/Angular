import { Component } from '@angular/core';

import { Animal } from '../interfaces/Animals';
import { CommonModule } from '@angular/common';

import { ListService } from '../../services/list.service';


@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  constructor(private listService: ListService){}

  animals: Animal[] = [
    {
      name: "Duque",
      type: "Dog",
      age: 8
    },
    {
    name: "Haru",
    type: "Cat",
    age: 5
    },
    {
      name: "Loro",
      type: "Bird",
      age: 20
    }
  ];

  animalDetails = '';

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }
}

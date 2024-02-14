import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';
import { Pessoa } from '../../interfaces/Pessoa';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  constructor(private listService: ListService){
    this.getPessoas();
  }

  pessoas: Pessoa[] =[];

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

  ngOnInit(): void{}

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

  getPessoas(): void{
    this.listService.getAllPessoas().subscribe((pessoas => (this.pessoas = pessoas)));
  }

  removePessoa(pessoa: Pessoa){
    this.pessoas = this.pessoas.filter((p) => pessoa.name !== p.name)
    this.listService.removePessoa(pessoa.id).subscribe();
  }

  getPessoa(): void{
    this.listService.getAllPessoas().subscribe((pessoas => (this.pessoas = pessoas)));
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceListaService } from './service-lista.service';
import { Pessoa } from './pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  people: Pessoa[] = [];

  constructor(private listar: ServiceListaService){
    
    console.log(this.listar.getPessoas());

  }

  ngOnInit() {
    this.ObterPessoas();
  }

   ObterPessoas(){
    // this.listar.getPessoas().subscribe((pessoas) => {
    //   this.people = pessoas;
    // });
   }
  

}

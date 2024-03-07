import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceListaService {
  pessoas: Pessoa[] = [
    {
      nome: 'João', 
      sobrenome: 'Carlos',
      numero:  25
    },
    {
      nome:'Maria', 
      sobrenome: 'da gloria', 
      numero: 30
    },
    {
      nome:'Ruan', 
      sobrenome: 'Escobar', 
      numero: 54
    }
  ];

  constructor() { }


  getPessoas(){
    console.log(this.pessoas);

  }

  // obterPessoas(): Observable<Pessoa[]>{
  //   return this.pessoas;
  // }

}

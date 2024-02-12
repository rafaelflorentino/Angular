import { Injectable } from '@angular/core';
import { People } from '../model/people.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people!: People[];

  constructor() {
    this.people = [
      {
        id: 0,
        nome: 'rafael',
        cpf: 123435454,
        email: 'teste@email',
      },
      {
        id: 1,
        nome: 'maria',
        cpf: 45654654645,
        email: 'teste2@email',
      },
      {
        id: 2,
        nome: 'pedro',
        cpf: 67876867876,
        email: 'teste3@email',
      },
    ];
  }

  getPeople(): Observable<People[]> {
    return of(this.people);
  }
}

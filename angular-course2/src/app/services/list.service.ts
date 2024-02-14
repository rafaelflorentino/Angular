import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../interfaces/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl ='http://localhost:3000/pessoas';
  
  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)
  }

  getAllPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  removePessoa(id: number){
    return this.http.delete<Pessoa>(`${this.apiUrl}/${id}`);
  }

  getItem(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }
}

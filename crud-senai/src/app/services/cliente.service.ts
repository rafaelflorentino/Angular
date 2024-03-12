import { HttpClient } from '@angular/common/http';
import { Cliente } from './../components/models/Cliente.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  
  url: string = 'http://localhost:3000/clientes';

  constructor( private _httpClient: HttpClient ) { }

  getClientes(): Observable<Cliente[]> {
    return this._httpClient.get<Cliente[]>(this.url);
  }

  cadastrarCliente(cliente: Cliente):Observable<Cliente[]>{
    return this._httpClient.post<Cliente[]>(this.url, cliente);
    }
    
}

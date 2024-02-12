import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypecodeService {
  
  constructor(private http: HttpClient) { }

  getTypes():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}

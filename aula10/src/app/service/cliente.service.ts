import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(environment.apiEndPoint + 'cliente');
  }

  // OBERVABLE RETORNA O CLIENTE INSERIDO
  inserir(cliente?: Cliente): Observable<Cliente>{

    if (!cliente) {
      return EMPTY;
    }
    // POST INSERE UM NOVO
    return this.http.post<Cliente>(environment.apiEndPoint + 'cliente', cliente);
  }

  atualizar(cliente?: Cliente): Observable<Cliente>{
    if (!cliente){
      return EMPTY;
    }
    return this.http.put<Cliente>(environment.apiEndPoint + 'cliente/' + cliente.id, cliente);
  }

  excluir(id: number): Observable<any>{
    if (id <= 0){
      return EMPTY;
    }
    return this.http.delete<any>(`${environment.apiEndPoint}cliente/${id}`);
  }
}

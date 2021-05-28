import { User } from './../../../model/user';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  address = `${environment.baseUrl}users`;
  constructor(private http: HttpClient) { }

  // RETORNA ARRAY DE USUARIO
  list(): Observable<User[]>{

    // GET<> RETRONA A FUNÇÃO
    // ENDPOINT (BASE URL), ENDEREÇO ONDE IRA BATER
    return this.http.get<User[]>(this.address);
  }

  insert(user?: User): Observable<User>{
    // verifica se tem usuario, se nao tiver retorna vazio

    if (!user){
      return EMPTY;
    }
    return this.http.post<User>(this.address, user);
  }

  update(user?: User): Observable<User>{

    if(!user){
      return EMPTY;
    }

    return this.http.put<User>(`${this.address}/${user.id}`, user);
  }

  // ANY POIS NAO IMPORTA O RETORNO
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.address}/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  url = 'http://localhost:8080/api/funcionarios';
  urlInserir = this.url + '/inserir';
  urlUpdate = this.url + '/update';


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.url);
  }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(this.url + '/' + id);
  }

  insertFuncionario(func: Funcionario): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(this.urlInserir, JSON.stringify(func), this.httpOptions)
  }

  updateFuncionario(func: Funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(this.urlUpdate + '/' + func.id, JSON.stringify(func), this.httpOptions)
  }

}

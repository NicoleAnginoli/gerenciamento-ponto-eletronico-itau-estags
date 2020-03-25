import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Batidaponto } from '../models/batidaponto';

@Injectable({
  providedIn: 'root'
})
export class BatidapontoService {
  
  url = 'http://localhost:8080/api/ponto';
  urlInserir = this.url + '/inserir';


  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getAllRegistries(): Observable<Batidaponto[]> {
    return this.httpClient.get<Batidaponto[]>(this.url);
  }

  getResgistriesById(idfunc: number): Observable<Batidaponto[]> {
    return this.httpClient.get<Batidaponto[]>(this.url + '/' + idfunc);
  }

  postRegistry(ponto: Batidaponto): Observable<Batidaponto> {
    return this.httpClient.post<Batidaponto>(this.urlInserir, JSON.stringify(ponto), this.httpOptions)
  }
}

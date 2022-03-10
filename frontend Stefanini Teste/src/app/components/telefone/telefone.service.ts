import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Telefone } from './telefone.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  apiUrl = "http://localhost:5000/api/Example"
  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // apiUrl: enviroment.api

  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg, 'X',{
      duration: 800,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  showMessageDelete(msg: string){
    this.snackBar.open(msg, 'X',{
      duration: 800,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: ['msg-delete']
    })
  }

  createPhone(telefone: Telefone): Observable<Telefone>{
    return this.http.post<Telefone>(this.apiUrl, telefone, { headers: this.headers}).pipe( //pipe utilizado depois para o tratamento de erro
      map(obj => obj),
      catchError(e => this.error(e))
    )
  }

  error(e: any): Observable<any> { // tratamento de erro
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }

  readPhone(): Observable<Telefone[]>{
    return this.http.get<Telefone[]>(this.apiUrl, { headers: this.headers})
  }

  readPhoneById(id: string): Observable<Telefone>{
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Telefone>(url, { headers: this.headers})
  }

  updatePhone(telefone: Telefone): Observable<Telefone>{
    const url = `${this.apiUrl}/${telefone.id}`
    return this.http.put<Telefone>(url, telefone, { headers: this.headers})
  }

  deletePhone(id: number): Observable<Telefone>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Telefone>(url)
  }

}

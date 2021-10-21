import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {
  subscribe(arg0: (res: { file: any; }) => void, arg1: (err: any) => void) {
    throw new Error('Method not implemented.');
  }

    
  // DJANGO_SERVER: string = "http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }

  getUsers(): Observable <any>{
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get<any>(url);
  }
  createUsers(): Observable <any>{
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get<any>(url);
  }
  deleteUsers(): Observable <any>{
    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get<any>(url);
  }
}

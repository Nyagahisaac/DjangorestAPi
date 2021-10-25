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

    
  // DJANGO_SERVER: string = "https://jsonplaceholder.typicode.com/comments";
  constructor(private http: HttpClient) { }

  getComments(): Observable <any>{
    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get<any>(url);
  }
  createComment(): Observable <any>{
    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get<any>(url);
  }
  deleteComment(): Observable <any>{
    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get<any>(url);
  }
}

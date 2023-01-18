import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPostsService implements OnInit{

  Myurl = "https://jsonplaceholder.typicode.com";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.getTraerDatos();
  }

  getDatos(){
    return this.http.get<any>(`${this.Myurl}/posts/`);
  }

}

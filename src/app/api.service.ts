import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { News } from './news';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = environment.apiUrl;
  public id: string;
  constructor(private httpClient: HttpClient) { }

  public getAllPosts(){
    return  this.httpClient.get(`${this.API_URL}/news`);
  }

  public getPostById(id: number){
      return  this.httpClient.get(`${this.API_URL}/news${this.id}`);
  }

}

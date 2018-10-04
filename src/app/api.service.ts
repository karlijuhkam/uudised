import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from  '@angular/common/http';

import { Observable } from 'rxjs';
import { SinglePostComponent } from './single-post/single-post.component';



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

  public getPostById(id: string){
      return  this.httpClient.get(`${this.API_URL}/news/${this.id}`);
  }

}

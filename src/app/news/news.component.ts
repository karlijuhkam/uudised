import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = 'Pealkiri';
  content= 'Sisu';

  private  posts:  Array<object> = [];

  constructor(private  ApiService:  ApiService) { }


  ngOnInit() {
    this.getAllPosts();
  }
  public getAllPosts(){
    this.ApiService.getAllPosts().subscribe((data:  Array<object>) => {
        this.posts  =  data;
        console.log(data);
    });
}

}

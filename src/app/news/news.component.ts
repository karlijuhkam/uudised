import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = 'Pealkiri';
  content= 'Sisu';

  // private  posts:  Array<object> = [];
  public id: string;
  interval : any;
  posts:any = [];

  constructor(private  ApiService:  ApiService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.getPosts();


    this.id = this.route.snapshot.paramMap.get('id');
    // this.interval = setInterval(() => {
    //     this.getAllPosts();
    // }, 5000);
  }
  getPosts() {
    this.posts = [];
    this.ApiService.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.posts = data;
    });
  }


}

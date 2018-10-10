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
    // this.interval = setInterval(() => {
    //     this.getPosts();
    // }, 5000);
  }
  getPosts() {
    this.posts = [];
    this.ApiService.getPosts().subscribe((data: {}) => {
      console.log(data);
      this.posts = data;
    });
  }

  delete(id) {
    this.ApiService.deletePost(id)
      .subscribe(res => {
          this.getPosts();
        }, (err) => {
          console.log(err);
        }
      );
  }


}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  public id: string;
  private posts:  Array<object> = [];
  constructor(private  ApiService:  ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostById(this.id);

  }

  public getPostById(id){
    this.ApiService.getPostById(this.id).subscribe((data:  Array<object>) => {
        this.posts = data;
        console.log(data);
    });
}
}

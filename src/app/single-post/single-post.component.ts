import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  posts:any = [];
  constructor(private  ApiService:  ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ApiService.getPost(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.posts = data;
  })
  }
  delete(id) {
    this.ApiService.deletePost(id)
      .subscribe(res => {
        this.router.navigate(['']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

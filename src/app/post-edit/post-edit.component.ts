import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @Input() postData = { title:'', content: '', photoUrl:'', category:'', tags:'' };
  constructor(private  ApiService:  ApiService, private route: ActivatedRoute, private router: Router) { }
  posts:any = [];

  ngOnInit() {
    this.ApiService.getPost(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.postData = data;
    });
  }
  updatePost() {
    this.ApiService.updatePost(this.route.snapshot.params['id'], this.postData).subscribe((result) => {
      this.router.navigate(['/post/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Input() postData = { title:'', content: '', photoUrl:'', category:'' };
  constructor(private  ApiService:  ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  addPost() {
    this.ApiService.addPost(this.postData).subscribe((result) => {
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }

}

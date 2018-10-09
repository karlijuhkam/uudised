import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ImageUploadModule } from "angular2-image-upload";
// import { Observable } from 'rxjs';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SinglePostComponent } from './single-post/single-post.component';
import { AddPostComponent } from './add-post/add-post.component';


//we'll add our routes here
const appRoutes: Routes = [
  { path: '',
    component: NewsComponent,
  },
  { path:'post/:id',
    component: SinglePostComponent,
  },
  { path:'add',
    component: AddPostComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SinglePostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EditorModule, // <- Important part
    ImageUploadModule.forRoot(),
    // Observable,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

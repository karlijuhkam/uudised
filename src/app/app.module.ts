import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorModule } from '@tinymce/tinymce-angular';
// import { Observable } from 'rxjs';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SinglePostComponent } from './single-post/single-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { OrderByPipe } from './order-by.pipe';
import { PostEditComponent } from './post-edit/post-edit.component';


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
  { path:'edit/:id',
    component: PostEditComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    SinglePostComponent,
    AddPostComponent,
    OrderByPipe,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EditorModule, // <- Important part
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

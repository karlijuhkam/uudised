import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { Observable } from "rxjs";
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
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

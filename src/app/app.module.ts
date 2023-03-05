import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule } from '@angular/router';

// Array of routes
const routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id/posts', component: PostsComponent },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, UserComponent, PostsComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

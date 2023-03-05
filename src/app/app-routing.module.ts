import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id/posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

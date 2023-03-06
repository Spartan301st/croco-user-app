import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';

const routes = [
  { path: 'users', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user/:id/posts', component: PostsComponent },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

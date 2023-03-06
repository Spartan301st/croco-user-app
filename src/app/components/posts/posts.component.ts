import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IPost } from 'src/app/interfaces/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  postsData: IPost[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.dataService
      .getAUserPosts()
      .pipe(take(1))
      .subscribe(
        (data) =>
          (this.postsData = data.filter((post) => post.userId === userId))
      );
  }
}

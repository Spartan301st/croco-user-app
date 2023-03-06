import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData: IUser | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.dataService
      .getAUser(userId)
      .pipe(take(1))
      .subscribe((data) => (this.userData = data));
  }
}

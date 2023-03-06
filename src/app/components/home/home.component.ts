import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
interface userIdName {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usersIdsNames: userIdName[] | undefined;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService
      .getUsers()
      .pipe(
        take(1),
        map((data) => data.map((user) => ({ id: user.id, name: user.name })))
      )
      .subscribe(
        (names) => (this.usersIdsNames = [...names])
      );
  }
}

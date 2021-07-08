import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
// import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.fetchData();
  }

  private async fetchData(){
    const usersObj = await this.data.getUsers().toPromise();
    this.users = usersObj;

    // new way to do toPromise()
    // const users$ = this.data.getUsers();
    // this.users = await lastValueFrom(users$);
  }
}

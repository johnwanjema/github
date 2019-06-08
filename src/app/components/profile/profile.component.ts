import { User } from './../../user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  result: any;

  constructor(private userService: UserService, private http: HttpClient) {
    this.user = new User("", 0, '', '', '', "", "")
  }

  getRepos() {
    const repos = 'https://api.github.com/users/johnwanjema/repos';


    this.http.get(repos).subscribe((data) => {
      this.result = data;

    });
  }


  ngOnInit() {
    this.userService.userInformation();
    this.user = this.userService.user;
  }
}

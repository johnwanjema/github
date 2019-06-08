import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../search/serch.component.css']
})
export class searchComponent implements OnInit {


  name: string;
  repos_url: any;
  


  usersf(search) {
    const link = 'https: //api.github.com/search/users?q=' + search.value;


    console.log(link);
  }

  repos(repo) {
    alert(repo.value);
  }

  constructor() { }


  ngOnInit() {
  }

}

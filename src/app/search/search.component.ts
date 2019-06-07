
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../search/serch.component.css']
})
export class searchComponent implements OnInit {

  users(search) {
    let link =  https://api.github.com/search/users?q='


    alert(search.value)
  }

  repos(repo) {
    alert(repo.value)
  }

  constructor() { }


  ngOnInit() {
  }

}

import { SearchrepoService } from './../services/searchrepo.service';
import { Repo } from './../repo';

import { RepoService } from './../services/repo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../search/serch.component.css']
})
export class searchComponent implements OnInit {
  prepo:Repo;
  user: any;
  username: string;
  repos: any;
  searchvalue: string;
  repository: any;


  constructor(private RepoService: RepoService, private http: HttpClient,private SearchrepoService: SearchrepoService) {
  }

  findProfile() {

    this.RepoService.getProfileInfo(this.username).subscribe(result => {
      this.user = result;
      console.log(this.username)
    });
  }


  // getprofilerepo(username: string) {
  //   const promise = new Promise((resolve, reject) => {
  //     this.http.get('https://api.github.com/users/' + username + '/repos').toPromise().then()(reponse => {

  //     this.Repo
  //     })

  //   })


  // }






  findrepo() {

    this.SearchrepoService.getrepository(this.searchvalue).subscribe(output => {
      this.repository = output;
      console.log(this.searchvalue)

    });
  }

  ngOnInit() {
  }

}

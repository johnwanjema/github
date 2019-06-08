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
  //   repo: Repo;
  //   result: any;

  //   constructor(private RepoService: RepoService, private http: HttpClient) {
  //     this.repo = new Repo('', 0, '', '', '')
  //   }

  //   repos(rep) {
  //     const repos = 'https://api.github.com/search/users?q=wanjema' ;
  //      console.log(repos)

  //     this.http.get(repos).subscribe((data) => {
  //       this.result = data;
  //       console.log(this.result)

  //     });
  //   }


  //   ngOnInit() {
  //     this.RepoService.repoInformation();
  //     this.repo = this.RepoService.repo;
  //   }
  profile: any;
  username: string;
  repos: any;
  constructor(private RepoService: RepoService) {
  }
  findProfile() {

    this.RepoService.getProfileInfo(this.username).subscribe( result=> {
      this.profile = result;
    });
  }


  findrepo() {

    this.RepoService.getProfileInfo(this.username).subscribe(github => {
      this.profile = github;
    });
  }

  ngOnInit() {
  }

}

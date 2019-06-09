import { SearchrepoService } from './../services/searchrepo.service';
import { Repo } from './../repo';

import { RepoService } from './../services/repo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../search/serch.component.css']
})
export class searchComponent implements OnInit {
  prepo: Repo;
  user: any;
  username: string;
  repos: any;
  searchvalue: string;
  repository: any;


  getprofilerepo(username) {
    interface ApiResponse {
      repo: string;
      name: string;
    }
    const promise = new Promise((resolve, reject) => {
      var link = (environment.serch + username + '/repos');
      console.log(link)
      this.http.get<ApiResponse>(link).toPromise().then(
        (response) => {
          this.repos = response;
          resolve();

          console.log(response);
        },
        (error) => {

          reject(error);
        }
      );
    });
    return promise;
  }


  constructor(private RepoService: RepoService, private http: HttpClient, private SearchrepoService: SearchrepoService) {
  }

  findProfile() {

    this.RepoService.getProfileInfo(this.username).subscribe(result => {
      this.user = result;
      console.log(this.username)
    });
  }


  //  {
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

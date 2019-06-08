import { Repo } from './../repo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RepoService {

  // repo: Repo;

  // repoInformation() {
  //   interface ApiResponse {
  //     login: string;
  //     id: number;
  //     avatar_url: string;
  //     repos_url: string;
  //     html_url: string;

  //   }
  //   const promise = new Promise((resolve, reject) => {
  //     let link = "https://api.github.com/search/users?q=wanjema";

  //     this.http.get<ApiResponse>(link).toPromise().then(
  //       (response) => {
  //         this.repo.login = response.login;
  //         this.repo.id = response.id;
  //         this.repo.avatar_url = response.avatar_url;
  //         this.repo.repo = response.repos_url;
  //         this.repo.html_url = response.html_url;

  //         resolve();


  //         console.log(response.login);
  //       },
  //       (error) => {
  //         alert('error');
  //         reject(error);
  //       }
  //     );
  //   });
  //   return promise;
  // }

  getProfileInfo(username: string) {
    return this.http.get('https://api.github.com/users/' + username);
  }

  getrepository(repository: string) {
    // this.https.get('api.github.com/search/repositories?q={quotes}{&page,per_page,sort,order'}
}

constructor(private http: HttpClient) {
  // this.repo = new Repo('', 0, '', '', '');
}
}

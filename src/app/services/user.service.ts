import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  clientid:string;
  clientsecret:string;
  userInformation() {
    interface ApiResponse {
      login: string;
      id: number;
      avatar_url: string;
      bio: string;
      repo: string;
    }
    const promise = new Promise((resolve, reject) => {

      this.clientid = 'Iv1.7776f51995c3fbfc';
      this.clientsecret = '04f050d32219a8769fe2676ddccfb1a4322571a2';


      var link = (environment.link + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
      console.log(link);
      this.http.get<ApiResponse>(link).toPromise().then(
        (response) => {
          this.user.name = response.login;
          this.user.id = response.id;
          this.user.avatar_url = response.avatar_url;
          this.user.bio = response.bio;
          this.user.repos_url = response.repo;

          resolve();


          console.log(response.login);
        },
        (error) => {
          alert('error');
          reject(error);
        }
      );
    });
    return promise;
  }

  constructor(private http: HttpClient) {
    this.user = new User('', 0, '', '', '', '', '');
  }
}




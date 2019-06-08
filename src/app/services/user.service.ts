import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientid: 'Iv1.bf178c2636e78d47';
  private clientsecret: 'c40e5c5b7748f0e358584878c86db85edbec72ee';
  constructor(private http: HttpClient) {
    this.username = 'johnwanjema'

  }
  getuser() {
    return this.http.get('https://api.github.com/users/' + this.username + "?client_id =" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res.json());
  }

}

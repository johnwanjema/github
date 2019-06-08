import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchrepoService {



  getrepository(searchvalue: string) {

    return this.http.get('https://api.github.com/search/repositories?q={' + searchvalue + ',}{&page,per_page,sort,order}');
   
  }


  constructor(private http: HttpClient) {

  }
}

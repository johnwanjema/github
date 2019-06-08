import { RepoService } from './services/repo.service';
import { SearchrepoService } from './services/searchrepo.service'
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Defining routes
const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'searchuser', component: searchComponent }
]


import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { searchComponent } from './search/search.component';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    searchComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,
    RepoService, SearchrepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

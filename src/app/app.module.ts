import { RepoService } from './services/repo.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'
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
    HttpClientModule
  ],
  providers: [UserService,
    RepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

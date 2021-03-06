;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "./rx-extensions";

import { routing } from "./app.routes";
import { GithubIssuesModule } from './github/github-issues/github-issues.module';
import { SettingsModule } from "./settings/settings.module";

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFound404Component } from "./not-found404/not-found404.component";
import { SelectedIssuesComponent } from './select/selected-issues.component';

import { AppService } from './app.service';
import { GithubProfileService } from './github/github-profile.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component,
    SelectedIssuesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SettingsModule,
    routing,
    GithubIssuesModule,
  ],
  providers: [
    AppService,
    GithubProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

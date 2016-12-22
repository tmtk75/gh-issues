;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import "./rx-extensions";

import { SettingsModule } from "./settings/settings.module";

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFound404Component } from "./not-found404/not-found404.component";

import { routing } from "./app.routes";
import { GithubIssuesModule } from './github/github-issues/github-issues.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFound404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SettingsModule,
    routing,
    GithubIssuesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

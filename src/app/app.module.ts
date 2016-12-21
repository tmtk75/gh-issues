import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { IssuesComponent } from './issues/issues.component';

import { routing } from "./app.routes"

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private navigationEnd: NavigationEnd = {id: -1, url: "", urlAfterRedirects: ""};

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.navigationEnd = e;
      }
    })
  }
  
}

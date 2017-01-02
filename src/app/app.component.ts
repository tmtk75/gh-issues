import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, Data, NavigationEnd } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  private navigationEnd: NavigationEnd = {id: -1, url: "", urlAfterRedirects: null};

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.navigationEnd = e;
      }
    });
  }

}

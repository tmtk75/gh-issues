import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})
export class TokensComponent implements OnInit {

  token: string;

  ngOnInit() {
    this.token = localStorage.getItem("GITHUB_TOKEN");
  }

  onClick(): boolean {
    console.log(this.token);
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AppService } from '../../app.service';
import { GithubProfileService } from '../../github/github-profile-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private theForm: FormGroup;
  private login: string;
  private avatarURL: string = "https://avatars3.githubusercontent.com/u/9919?v=3&s=72";
  private error: Error;

  constructor(
    private _fb: FormBuilder,
    private _app: AppService,
    private _gh: GithubProfileService,
  ) { }

  ngOnInit() {
    this.theForm = this._fb.group({
      name: new FormControl({value: '', disabled: true}),
    });

    const token = this._app.getAccessToken();
    if (!token) {
      return;
    }
    this._gh.getGithubProfile(token).subscribe(profile => {
      this.login = profile.login;
      this.theForm.get("name").setValue(profile.name);
      this.avatarURL = profile.avatar_url;
    }, (err) => this.error = err);
  }

}

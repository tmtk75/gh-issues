import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})
export class TokensComponent implements OnInit {

  private theForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _app: AppService,
  ) {}

  ngOnInit() {
    this.theForm = this._fb.group({
      token: '',
    });
    this.theForm.get('token').setValue(this._app.getAccessToken());
  }

  onClick(): boolean {
    this._app.saveAccessToken(this.theForm.get('token').value);
    return false;
  }

}

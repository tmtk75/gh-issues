import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss']
})
export class TokensComponent implements OnInit {

  private theForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.theForm = this._fb.group({
      token: '',
    });
    this.theForm.controls['token'].setValue(localStorage.getItem("GITHUB_TOKEN"));
  }

  onClick(): boolean {
    console.log({touched: this.theForm.touched, dirty: this.theForm.dirty})
    return false;
  }

}

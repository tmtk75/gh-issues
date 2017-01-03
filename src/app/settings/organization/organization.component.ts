import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  theForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.theForm = this._fb.group({organization: ''});
    this.theForm.get('organization').setValue(this.appService.getDefaultOrganization());
  }

  onClick() {
    this.appService.saveDefaultOrganization(this.theForm.get('organization').value);
  }

}

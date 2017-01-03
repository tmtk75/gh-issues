import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { settingsRouting } from "./settings.routes";

import { SettingsComponent } from "./settings.component";
import { AccountComponent } from "./account/account.component";
import { TokensComponent } from './tokens/tokens.component';
import { OrganizationComponent } from './organization/organization.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    settingsRouting,
  ],
  declarations: [
    SettingsComponent,
    AccountComponent,
    TokensComponent,
    OrganizationComponent,
  ],
})
export class SettingsModule { }

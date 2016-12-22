import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { settingsRouting } from "./settings.routes";

import { SettingsComponent } from "./settings.component";
import { AccountComponent } from "./account/account.component";
import { SecurityComponent } from "./security/security.component";

@NgModule({
  imports: [
    CommonModule,
    settingsRouting,
  ],
  declarations: [
    SettingsComponent,
    AccountComponent,
    SecurityComponent,
  ],
})
export class SettingsModule { }

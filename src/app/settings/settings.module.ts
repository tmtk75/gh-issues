import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { settingsRouting } from "./settings.routes";

import { SettingsComponent } from "./settings.component";
import { AccountComponent } from "./account/account.component";
import { TokensComponent } from './tokens/tokens.component';

@NgModule({
  imports: [
    CommonModule,
    settingsRouting,
  ],
  declarations: [
    SettingsComponent,
    AccountComponent,
    TokensComponent,
  ],
})
export class SettingsModule { }

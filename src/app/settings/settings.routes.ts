import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { SettingsComponent } from "./settings.component"
import { AccountComponent } from "./account/account.component"
import { OrganizationComponent } from "./organization/organization.component"
import { TokensComponent } from "./tokens/tokens.component"

const appRoutes: Routes = [
    {
        path: "settings",
        component: SettingsComponent,
        children: [
            {path: "", redirectTo: "account", pathMatch: 'full'},
            {path: "account", component: AccountComponent},
            {path: "organization", component: OrganizationComponent},
            {path: "tokens", component: TokensComponent},
        ]
    },
]

export const settingsRouting: ModuleWithProviders = RouterModule.forChild(appRoutes)
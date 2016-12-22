import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { SettingsComponent } from "./settings.component"
import { AccountComponent } from "./account/account.component"
import { SecurityComponent } from "./security/security.component"

const appRoutes: Routes = [
    {
        path: "settings",
        component: SettingsComponent,
        children: [
            {path: "account", component: AccountComponent},
            {path: "security", component: SecurityComponent},
        ]
    },
]

export const settingsRouting: ModuleWithProviders = RouterModule.forChild(appRoutes)
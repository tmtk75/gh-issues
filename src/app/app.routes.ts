import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { IssuesComponent } from "./issues/issues.component"
import { SettingsComponent } from "./settings/settings.component"

const appRoutes: Routes = [
    {path: "", redirectTo: "issues", pathMatch: "full"},
    {path: "issues", component: IssuesComponent},
    {path: "settings", component: SettingsComponent},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
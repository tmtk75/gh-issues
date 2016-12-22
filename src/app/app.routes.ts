import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { IssuesComponent } from "./issues/issues.component"
import { SettingsComponent } from "./settings/settings.component"
import { NotFound404Component } from "./not-found404/not-found404.component"

const appRoutes: Routes = [
    {path: "", redirectTo: "issues", pathMatch: "full"},
    {path: "issues", component: IssuesComponent},
    //{path: "settings", component: SettingsComponent},
    {path: "**", component: NotFound404Component},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
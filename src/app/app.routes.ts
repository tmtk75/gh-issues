import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { GithubIssuesComponent } from "./github/github-issues/github-issues.component"
import { SelectedIssuesComponent } from "./select/selected-issues.component"
import { SettingsComponent } from "./settings/settings.component"
import { NotFound404Component } from "./not-found404/not-found404.component"

const appRoutes: Routes = [
    {path: "", redirectTo: "search", pathMatch: "full"},
    {path: "search", component: GithubIssuesComponent},
    {path: "select", component: SelectedIssuesComponent},
    {path: "**", component: NotFound404Component},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
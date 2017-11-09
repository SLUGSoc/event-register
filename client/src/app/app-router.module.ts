import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { EventListComponent } from './event-list/event-list.component'
import { MemberListComponent } from './member-list/member-list.component'

const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventListComponent },
  { path: 'members', component: MemberListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}

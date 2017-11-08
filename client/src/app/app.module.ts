import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRouterModule } from './app-router.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EventsComponent } from './events/events.component'
import { MembersComponent } from './members/members.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    MembersComponent
  ],
  imports: [BrowserModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

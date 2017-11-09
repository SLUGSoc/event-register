import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRouterModule } from './app-router.module'

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EventListComponent } from './event-list/event-list.component'
import { MemberListComponent } from './member-list/member-list.component'
import { EventItemComponent } from './event-item/event-item.component'
import { MemberItemComponent } from './member-item/member-item.component'

import { EventService } from './event.service'
import { MemberService } from './member.service'
import { RegisterService } from './register.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventListComponent,
    MemberListComponent,
    EventItemComponent,
    MemberItemComponent
  ],
  imports: [BrowserModule, AppRouterModule, HttpClientModule],
  providers: [EventService, MemberService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule {}

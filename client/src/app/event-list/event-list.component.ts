import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { EventService } from '../event.service'

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events$: Observable<any>

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.events$ = this.eventService.getEvents()
  }
}

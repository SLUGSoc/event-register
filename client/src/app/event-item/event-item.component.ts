import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event

  constructor() {}

  ngOnInit() {}
}

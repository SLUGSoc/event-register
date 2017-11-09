import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  @Input() member

  constructor() {}

  ngOnInit() {}
}

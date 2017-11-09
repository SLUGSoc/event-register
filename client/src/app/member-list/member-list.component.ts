import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { MemberService } from '../member.service'

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<any>

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.members$ = this.memberService.getMembers()
  }
}

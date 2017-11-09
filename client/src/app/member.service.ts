import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class MemberService {
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get('/api/members', {
      params: {
        include: 'events'
      }
    })
  }

  getMember(memberId: number) {
    return this.http.get(`/api/member/${memberId}`, {
      params: {
        include: 'events'
      }
    })
  }
}

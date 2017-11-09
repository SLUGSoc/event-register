import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get('/api/events', {
      params: {
        include: 'attendees'
      }
    })
  }

  getEvent(eventId: number) {
    return this.http.get(`/api/event/${eventId}`, {
      params: {
        include: 'attendees'
      }
    })
  }
}

import ApiService from './ApiService'
import { Event, EventData } from '@/types'

class EventService {
  public async createEvent(eventData: EventData): Promise<Event> {
    return ApiService.post<Event>('/events', eventData)
  }

  public async getAllEvents(): Promise<Event[]> {
    return ApiService.get<Event[]>('/events')
  }

  public async getEventById(eventId: string): Promise<Event> {
    return ApiService.get<Event>(`/events/${eventId}`)
  }

  public async updateEvent(eventId: string, updatedEventData: EventData): Promise<Event> {
    return ApiService.put<Event>(`/events/${eventId}`, updatedEventData)
  }

  public async deleteEvent(eventId: string): Promise<Event> {
    return ApiService.delete<Event>(`/events/${eventId}`)
  }
}

export default new EventService()

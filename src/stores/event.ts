import { defineStore } from 'pinia'
import EventService from '@/services/EventService'
import type { Event, EventData } from '@/types'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    events: [] as Event[]
  }),
  actions: {
    async createEvent(eventData: EventData): Promise<void> {
      try {
        const newEvent = await EventService.createEvent(eventData)
        this.events.push(newEvent)
      } catch (error) {
        console.error('Error creating event:', error)
        throw error
      }
    },

    async fetchAllEvents(): Promise<void> {
      try {
        const events = await EventService.getAllEvents()
        this.events = events
      } catch (error) {
        console.error('Error fetching events:', error)
        throw error
      }
    },

    async fetchEventById(eventId: string): Promise<void> {
      try {
        const event = await EventService.getEventById(eventId)
        const existingIndex = this.events.findIndex((e) => e._id === event._id)

        if (existingIndex !== -1) {
          this.events[existingIndex] = event
        } else {
          this.events.push(event)
        }
      } catch (error) {
        console.error('Error fetching event by ID:', error)
        throw error
      }
    },

    async updateEvent({
      eventId,
      updatedEventData
    }: {
      eventId: string
      updatedEventData: EventData
    }): Promise<void> {
      try {
        const updatedEvent = await EventService.updateEvent(eventId, updatedEventData)
        const existingIndex = this.events.findIndex((e) => e._id === updatedEvent._id)

        if (existingIndex !== -1) {
          this.events[existingIndex] = updatedEvent
        }
      } catch (error) {
        console.error('Error updating event:', error)
        throw error
      }
    },

    async deleteEvent(eventId: string): Promise<void> {
      try {
        await EventService.deleteEvent(eventId)
        this.events = this.events.filter((e) => e._id !== eventId)
      } catch (error) {
        console.error('Error deleting event:', error)
        throw error
      }
    }
  }
})

import { defineStore } from 'pinia'
import DebateService from '@/services/DebateService'
import type { Debate, DebateData } from '@/types'

export const useDebateStore = defineStore('debate', {
  state: () => ({
    debates: [] as Debate[],
    currentDebate: null as Debate | null
  }),

  getters: {
    getDebates: (state) => state.debates,
    getCurrentDebate: (state) => state.currentDebate
  },

  actions: {
    async createDebate(debateData: DebateData): Promise<void> {
      try {
        const newDebate = await DebateService.createDebate(debateData)
        this.debates.push(newDebate)
      } catch (error) {
        console.error('Error creating debate:', error)
      }
    },

    async getAllDebates(): Promise<void> {
      try {
        this.debates = await DebateService.getAllDebates()
      } catch (error) {
        console.error('Error fetching debates:', error)
      }
    },

    async getDebateById(debateId: string): Promise<void> {
      try {
        this.currentDebate = await DebateService.getDebateById(debateId)
      } catch (error) {
        console.error('Error fetching debate by ID:', error)
      }
    },

    async addNoteToDebate({ debateId, note }: { debateId: string; note: string }): Promise<void> {
      try {
        const updatedDebate = await DebateService.addNoteToDebate(debateId, note)
        const index = this.debates.findIndex((debate) => debate._id === debateId)
        if (index !== -1) {
          this.debates.splice(index, 1, updatedDebate)
        }
      } catch (error) {
        console.error('Error adding note to debate:', error)
      }
    },

    async markKeyMomentInDebate({
      debateId,
      keyMoment
    }: {
      debateId: string
      keyMoment: string
    }): Promise<void> {
      try {
        const updatedDebate = await DebateService.markKeyMomentInDebate(debateId, keyMoment)
        const index = this.debates.findIndex((debate) => debate._id === debateId)
        if (index !== -1) {
          this.debates.splice(index, 1, updatedDebate)
        }
      } catch (error) {
        console.error('Error marking key moment in debate:', error)
      }
    },

    async deleteDebate(debateId: string): Promise<void> {
      try {
        await DebateService.deleteDebate(debateId)
        this.debates = this.debates.filter((debate) => debate._id !== debateId)
      } catch (error) {
        console.error('Error deleting debate:', error)
      }
    }
  }
})

export default useDebateStore

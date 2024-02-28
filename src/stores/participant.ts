import { defineStore } from 'pinia'
import ParticipantService from '@/services/ParticipantService'
import type { Participant, ParticipantData } from '@/types'

export const useParticipantStore = defineStore('participant', {
  state: () => ({
    participants: [] as Participant[],
    selectedParticipant: null as Participant | null
  }),

  actions: {
    async createParticipant(participantData: ParticipantData): Promise<void> {
      try {
        const newParticipant = await ParticipantService.createParticipant(participantData)
        this.participants.push(newParticipant)
      } catch (error) {
        console.error('Erreur lors de la création du participant :', error)
      }
    },

    async getAllParticipants(): Promise<void> {
      try {
        this.participants = await ParticipantService.getAllParticipants()
      } catch (error) {
        console.error('Erreur lors de la récupération des participants :', error)
      }
    },

    async getParticipantById(participantId: string): Promise<void> {
      try {
        this.selectedParticipant = await ParticipantService.getParticipantById(participantId)
      } catch (error) {
        console.error('Erreur lors de la récupération du participant par ID :', error)
      }
    },

    async updateParticipant({
      participantId,
      updatedParticipantData
    }: {
      participantId: string
      updatedParticipantData: ParticipantData
    }): Promise<void> {
      try {
        const updatedParticipant = await ParticipantService.updateParticipant(
          participantId,
          updatedParticipantData
        )
        const index = this.participants.findIndex((p) => p._id === participantId)
        if (index !== -1) {
          this.participants[index] = updatedParticipant
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du participant :', error)
      }
    },

    async deleteParticipant(participantId: string): Promise<void> {
      try {
        await ParticipantService.deleteParticipant(participantId)
        this.participants = this.participants.filter((p) => p._id !== participantId)
      } catch (error) {
        console.error('Erreur lors de la suppression du participant :', error)
      }
    }
  }
})

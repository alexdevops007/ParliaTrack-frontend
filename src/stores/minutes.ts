import { defineStore } from 'pinia'
import MinutesService from '@/services/MinutesService'
import type { Minutes, MinutesData } from '@/types'

export const useMinutesStore = defineStore('minutes', {
  state: () => ({
    minutesList: [] as Minutes[],
    currentMinutes: {} as Minutes
  }),

  actions: {
    async createMinutes(minutesData: MinutesData): Promise<void> {
      try {
        await MinutesService.createMinutes(minutesData)
      } catch (error) {
        console.error('Erreur lors de la création des minutes :', error)
      }
    },

    async getAllMinutes(): Promise<void> {
      try {
        const minutesList = await MinutesService.getAllMinutes()
        this.minutesList = minutesList
      } catch (error) {
        console.error('Erreur lors de la récupération de toutes les minutes :', error)
      }
    },

    async getMinutesById(minutesId: string): Promise<void> {
      try {
        const minutes = await MinutesService.getMinutesById(minutesId)
        this.currentMinutes = minutes
      } catch (error) {
        console.error('Erreur lors de la récupération des minutes par ID :', error)
      }
    },

    async annotateMinutes({
      minutesId,
      annotation
    }: {
      minutesId: string
      annotation: string
    }): Promise<void> {
      try {
        await MinutesService.annotateMinutes(minutesId, annotation)
      } catch (error) {
        console.error("Erreur lors de l'annotation des minutes :", error)
      }
    },

    async publishMinutes(minutesId: string): Promise<void> {
      try {
        await MinutesService.publishMinutes(minutesId)
      } catch (error) {
        console.error('Erreur lors de la publication des minutes :', error)
      }
    },

    async deleteMinutes(minutesId: string): Promise<void> {
      try {
        await MinutesService.deleteMinutes(minutesId)
      } catch (error) {
        console.error('Erreur lors de la suppression des minutes :', error)
      }
    }
  }
})

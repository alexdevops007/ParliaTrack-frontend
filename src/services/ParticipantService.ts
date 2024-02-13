import ApiService from './ApiService'
import { Participant, ParticipantData } from '@/types'

class ParticipantService {
  public async createParticipant(participantData: ParticipantData): Promise<Participant> {
    return ApiService.post<Participant>('/participants', participantData)
  }

  public async getAllParticipants(): Promise<Participant[]> {
    return ApiService.get<Participant[]>('/participants')
  }

  public async getParticipantById(participantId: string): Promise<Participant> {
    return ApiService.get<Participant>(`/participants/${participantId}`)
  }

  public async updateParticipant(
    participantId: string,
    updatedParticipantData: ParticipantData
  ): Promise<Participant> {
    return ApiService.put<Participant>(`/participants/${participantId}`, updatedParticipantData)
  }

  public async deleteParticipant(participantId: string): Promise<Participant> {
    return ApiService.delete<Participant>(`/participants/${participantId}`)
  }
}

export default new ParticipantService()

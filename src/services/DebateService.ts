import ApiService from './ApiService'
import type { Debate, DebateData } from '@/types'

class DebateService {
  public async createDebate(debateData: DebateData): Promise<Debate> {
    return ApiService.post<Debate>('/debates', debateData)
  }

  public async getAllDebates(): Promise<Debate[]> {
    return ApiService.get<Debate[]>('/debates')
  }

  public async getDebateById(debateId: string): Promise<Debate> {
    return ApiService.get<Debate>(`/debates/${debateId}`)
  }

  public async addNoteToDebate(debateId: string, note: string): Promise<Debate> {
    return ApiService.put<Debate>(`/debates/${debateId}/add-note`, { note })
  }

  public async markKeyMomentInDebate(debateId: string, keyMoment: string): Promise<Debate> {
    return ApiService.put<Debate>(`/debates/${debateId}/mark-key-moment`, {
      keyMoment
    })
  }

  public async deleteDebate(debateId: string): Promise<Debate> {
    return ApiService.delete<Debate>(`/debates/${debateId}`)
  }
}

export default new DebateService()

import ApiService from './ApiService'
import type { Minutes, MinutesData } from '@/types'

class MinutesService {
  public async createMinutes(minutesData: MinutesData): Promise<Minutes> {
    return ApiService.post<Minutes>('/minutes', minutesData)
  }

  public async getAllMinutes(): Promise<Minutes[]> {
    return ApiService.get<Minutes[]>('/minutes')
  }

  public async getMinutesById(minutesId: string): Promise<Minutes> {
    return ApiService.get<Minutes>(`/minutes/${minutesId}`)
  }

  public async annotateMinutes(minutesId: string, annotation: string): Promise<Minutes> {
    return ApiService.put<Minutes>(`/minutes/${minutesId}/annotate`, {
      annotation
    })
  }

  public async publishMinutes(minutesId: string): Promise<Minutes> {
    return ApiService.put<Minutes>(`/minutes/${minutesId}/publish`)
  }

  public async deleteMinutes(minutesId: string): Promise<Minutes> {
    return ApiService.delete<Minutes>(`/minutes/${minutesId}`)
  }
}

export default new MinutesService()

import ApiService from './ApiService'
import { Document, DocumentData } from '@/types'

class DocumentService {
  public async uploadDocument(documentData: DocumentData): Promise<Document> {
    return ApiService.post<Document>('/documents/upload', documentData)
  }

  public async getAllDocuments(): Promise<Document[]> {
    return ApiService.get<Document[]>('/documents')
  }

  public async getDocumentById(documentId: string): Promise<Document> {
    return ApiService.get<Document>(`/documents/${documentId}`)
  }

  public async downloadDocument(documentId: string): Promise<void> {
    return ApiService.get<void>(`/documents/${documentId}/download`)
  }

  public async deleteDocument(documentId: string): Promise<Document> {
    return ApiService.delete<Document>(`/documents/${documentId}`)
  }
}

export default new DocumentService()

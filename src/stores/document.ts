import { defineStore } from 'pinia'
import DocumentService from '@/services/DocumentService'
import type { Document, DocumentData } from '@/types'

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents: [] as Document[],
    currentDocument: null as Document | null
  }),

  getters: {
    getDocuments: (state) => state.documents,
    getCurrentDocument: (state) => state.currentDocument
  },

  actions: {
    async uploadDocument(documentData: DocumentData): Promise<void> {
      try {
        await DocumentService.uploadDocument(documentData)
      } catch (error) {
        console.error('Error uploading document:', error)
      }
    },

    async fetchAllDocuments(): Promise<void> {
      try {
        const documents = await DocumentService.getAllDocuments()
        this.documents = documents
      } catch (error) {
        console.error('Error fetching documents:', error)
      }
    },

    async fetchDocumentById(documentId: string): Promise<void> {
      try {
        const document = await DocumentService.getDocumentById(documentId)
        this.currentDocument = document
      } catch (error) {
        console.error('Error fetching document by ID:', error)
      }
    },

    async downloadDocument(documentId: string): Promise<void> {
      try {
        await DocumentService.downloadDocument(documentId)
      } catch (error) {
        console.error('Error downloading document:', error)
      }
    },

    async deleteDocument(documentId: string): Promise<void> {
      try {
        await DocumentService.deleteDocument(documentId)
      } catch (error) {
        console.error('Error deleting document:', error)
      }
    }
  }
})

export default useDocumentStore

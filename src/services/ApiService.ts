import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

class ApiService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL })
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request<T>(config)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // La requête a été faite et le serveur a répondu avec un statut différent de 2xx
        if (error.response) {
          console.error('Error response:', error.response.data)
        } else {
          console.error('No response received')
        }
      } else {
        // Une erreur s'est produite lors de la configuration de la requête
        console.error('Request configuration error:', error)
      }
      throw new Error('Request failed')
    }
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'get', url })
  }

  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'post', url, data })
  }

  public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'put', url, data })
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'delete', url })
  }
}

export default new ApiService('http://localhost:4500/api')

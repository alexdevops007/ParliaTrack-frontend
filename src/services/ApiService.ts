import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class ApiService {
  private baseURL: string
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.axiosInstance = axios.create({ baseURL })
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.request<T>(config)
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || error.message || 'Request failed'
      } else {
        throw 'Request failed'
      }
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

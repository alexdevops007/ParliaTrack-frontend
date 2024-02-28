import ApiService from './ApiService'
import type { OrderOfBusiness, OrderOfBusinessData } from '@/types'

class OrderOfBusinessService {
  public async getAllOrders(): Promise<OrderOfBusiness[]> {
    return ApiService.get<OrderOfBusiness[]>('/order-of-business')
  }

  public async getOrderById(orderId: string): Promise<OrderOfBusiness> {
    return ApiService.get<OrderOfBusiness>(`/order-of-business/${orderId}`)
  }

  public async createOrder(orderData: OrderOfBusinessData): Promise<OrderOfBusiness> {
    return ApiService.post<OrderOfBusiness>('/order-of-business', orderData)
  }

  public async updateOrder(
    orderId: string,
    orderData: OrderOfBusinessData
  ): Promise<OrderOfBusiness> {
    return ApiService.put<OrderOfBusiness>(`/order-of-business/${orderId}`, orderData)
  }

  public async deleteOrder(orderId: string): Promise<void> {
    await ApiService.delete(`/order-of-business/${orderId}`)
  }
}

export default new OrderOfBusinessService()

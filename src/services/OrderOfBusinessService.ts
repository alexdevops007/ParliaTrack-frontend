import ApiService from './ApiService'
import { Order, OrderData } from '@/types'

class OrderOfBusinessService {
  public async getAllOrders(): Promise<Order[]> {
    return ApiService.get<Order[]>('/order-of-business')
  }

  public async getOrderById(orderId: string): Promise<Order> {
    return ApiService.get<Order>(`/order-of-business/${orderId}`)
  }

  public async createOrder(orderData: OrderData): Promise<Order> {
    return ApiService.post<Order>('/order-of-business', orderData)
  }

  public async updateOrder(orderId: string, orderData: OrderData): Promise<Order> {
    return ApiService.put<Order>(`/order-of-business/${orderId}`, orderData)
  }

  public async deleteOrder(orderId: string): Promise<void> {
    await ApiService.delete(`/order-of-business/${orderId}`)
  }
}

export default new OrderOfBusinessService()

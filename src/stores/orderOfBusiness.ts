import { defineStore } from 'pinia'
import ApiService from '@/services/ApiService'
import type { OrderOfBusiness, OrderOfBusinessData } from '@/types'

export const useOrderOfBusinessStore = defineStore({
  id: 'orderOfBusiness',
  state: () => ({
    orderOfBusinessList: [] as OrderOfBusiness[]
  }),
  actions: {
    async createOrderOfBusiness(orderOfBusinessData: OrderOfBusinessData) {
      const newOrderOfBusiness = await ApiService.post<OrderOfBusiness>(
        '/order-of-business',
        orderOfBusinessData
      )
      this.orderOfBusinessList.push(newOrderOfBusiness)
    },
    async getAllOrderOfBusiness() {
      this.orderOfBusinessList = await ApiService.get<OrderOfBusiness[]>('/order-of-business')
    },
    async getOrderOfBusinessById(orderOfBusinessId: string) {
      return ApiService.get<OrderOfBusiness>(`/order-of-business/${orderOfBusinessId}`)
    },
    async updateOrderOfBusiness(orderOfBusinessId: string, updatedData: OrderOfBusinessData) {
      const updatedOrderOfBusiness = await ApiService.put<OrderOfBusiness>(
        `/order-of-business/${orderOfBusinessId}`,
        updatedData
      )
      const index = this.orderOfBusinessList.findIndex(
        (order) => order._id === updatedOrderOfBusiness._id
      )
      this.orderOfBusinessList[index] = updatedOrderOfBusiness
    },
    async deleteOrderOfBusiness(orderOfBusinessId: string) {
      await ApiService.delete<OrderOfBusiness>(`/order-of-business/${orderOfBusinessId}`)
      this.orderOfBusinessList = this.orderOfBusinessList.filter(
        (order) => order._id !== orderOfBusinessId
      )
    }
  }
})

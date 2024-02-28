import { defineStore } from 'pinia'
import OrderOfBusinessService from '@/services/OrderOfBusinessService'
import type { OrderOfBusiness, OrderOfBusinessData } from '@/types'

export const useOrderOfBusinessStore = defineStore('orderOfBusiness', {
  state: () => ({
    orders: [] as OrderOfBusiness[],
    currentOrder: null as OrderOfBusiness | null
  }),

  actions: {
    async getAllOrders() {
      try {
        this.orders = await OrderOfBusinessService.getAllOrders()
      } catch (error) {
        console.error('Erreur lors de la récupération des ordres du jour :', error)
      }
    },

    async getOrderById(orderId: string) {
      try {
        this.currentOrder = await OrderOfBusinessService.getOrderById(orderId)
      } catch (error) {
        console.error(
          `Erreur lors de la récupération de l'ordre du jour avec l'ID ${orderId} :`,
          error
        )
      }
    },

    async createOrder(orderData: OrderOfBusinessData) {
      try {
        const newOrder = await OrderOfBusinessService.createOrder(orderData)
        this.orders.push(newOrder)
      } catch (error) {
        console.error("Erreur lors de la création de l'ordre du jour :", error)
      }
    },

    async updateOrder({ orderId, orderData }: { orderId: string; orderData: OrderOfBusinessData }) {
      try {
        const updatedOrder = await OrderOfBusinessService.updateOrder(orderId, orderData)
        const index = this.orders.findIndex((order) => order._id === orderId)
        if (index !== -1) {
          this.orders[index] = updatedOrder
        }
      } catch (error) {
        console.error(
          `Erreur lors de la mise à jour de l'ordre du jour avec l'ID ${orderId} :`,
          error
        )
      }
    },

    async deleteOrder(orderId: string) {
      try {
        await OrderOfBusinessService.deleteOrder(orderId)
        this.orders = this.orders.filter((order) => order._id !== orderId)
      } catch (error) {
        console.error(
          `Erreur lors de la suppression de l'ordre du jour avec l'ID ${orderId} :`,
          error
        )
      }
    }
  }
})

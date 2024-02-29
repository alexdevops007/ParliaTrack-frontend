<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Liste des Ordres du Jour</h2>
    <ul>
      <OrderOfBusinessItem v-for="order in orders" :key="order._id" :order="order" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useOrderOfBusinessStore } from '@/stores/orderOfBusiness'
import OrderOfBusinessItem from './OrderOfBusinessItem.vue'

const { getAllOrders } = useOrderOfBusinessStore()
const orders = ref([])

onMounted(async () => {
  orders.value = (await getAllOrders()) || []
})
</script>

<template>
  <div class="container mx-auto p-8">
    <h2 class="text-3xl font-bold mb-8">Liste des Ordres du Jour</h2>

    <div v-if="loading" class="text-gray-600 text-lg mb-4">Chargement en cours...</div>

    <div v-else-if="orders.length === 0" class="text-gray-600 text-lg mb-4">Aucun ordre du jour disponible.</div>

    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <OrderOfBusinessItem v-for="order in orders" :key="order._id" :order="order" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useOrderOfBusinessStore } from '@/stores/orderOfBusiness'
import OrderOfBusinessItem from './OrderOfBusinessItem.vue'

const store = useOrderOfBusinessStore()

const loading = ref(true)
const orders = ref([])

onMounted(async () => {
  try {
    await store.fetchAllOrders()
    orders.value = store.getAllOrders
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
/* Ajoutez votre style Tailwind CSS ici si nécessaire */
</style>

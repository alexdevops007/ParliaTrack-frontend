<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Ajouter un Ordre du Jour</h2>

    <!-- Affiche le message de succès s'il y en a un -->
    <div v-if="successMessage" class="bg-green-200 p-2 mb-4">
      {{ successMessage }}
    </div>

    <form @submit.prevent="submitForm" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700"> Titre </label>
        <input
          v-model="title"
          type="text"
          id="title"
          name="title"
          required
          class="mt-1 p-2 border rounded"
        />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          v-model="description"
          id="description"
          name="description"
          rows="3"
          class="mt-1 p-2 border rounded"
        ></textarea>
      </div>
      <button type="submit" class="bg-primary text-white px-4 py-2 rounded">
        Ajouter l'Ordre du Jour
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOrderOfBusinessStore } from '../../stores/orderOfBusiness'
import type { OrderOfBusinessData } from '../../types'

const router = useRouter()
const { createOrder, getAllOrders } = useOrderOfBusinessStore()
const title = ref('')
const description = ref('')
const successMessage = ref('')

const submitForm = async () => {
  const orderData: OrderOfBusinessData = { title: title.value, description: description.value }
  try {
    await createOrder(orderData)

    // Mettre à jour la liste des ordres du jour
    await getAllOrders()

    // Afficher le message de succès
    successMessage.value = 'Ordre du Jour ajouté avec succès'

    // Effacer le formulaire après 2 secondes
    setTimeout(() => {
      title.value = ''
      description.value = ''
      successMessage.value = ''

      // Rediriger vers la liste des ordres du jour
      router.push('/order-of-business')
    }, 2000)
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'Ordre du Jour :", error)
    // Vous pouvez également afficher un message d'erreur ici si nécessaire
  }
}
</script>

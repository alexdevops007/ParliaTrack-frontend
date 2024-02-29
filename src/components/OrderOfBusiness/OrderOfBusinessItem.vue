<template>
  <li class="border p-4 mb-4">
    <h3 class="text-lg font-semibold">{{ order.title }}</h3>
    <p>{{ order.description }}</p>
    <button @click="handleDeleteOrder" class="mt-2 bg-red-500 text-white px-2 py-1">
      Supprimer
    </button>
    <button @click="toggleEditMode" class="mt-2 bg-blue-500 text-white px-2 py-1">Modifier</button>

    <!-- Formulaire de mise à jour -->
    <form v-if="editMode" @submit.prevent="handleUpdateOrder">
      <label for="title" class="block mt-2">Titre:</label>
      <input v-model="updatedTitle" type="text" id="title" required class="border px-2 py-1 mt-1" />

      <label for="description" class="block mt-2">Description:</label>
      <textarea
        v-model="updatedDescription"
        id="description"
        required
        class="border px-2 py-1 mt-1"
      ></textarea>

      <button type="submit" class="mt-2 bg-green-500 text-white px-2 py-1">Enregistrer</button>
    </form>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOrderOfBusinessStore } from '../../stores/orderOfBusiness'
import type { OrderOfBusiness } from '../../types'

const { deleteOrder, updateOrder } = useOrderOfBusinessStore()
const props = defineProps(['order'])
const order = ref<OrderOfBusiness>(props.order)

const editMode = ref(false)
const updatedTitle = ref(order.value.title)
const updatedDescription = ref(order.value.description)

const handleDeleteOrder = async () => {
  await deleteOrder(order.value._id)
  // Si vous souhaitez mettre à jour la liste après la suppression, déclenchez getAllOrders
}

const toggleEditMode = () => {
  editMode.value = !editMode.value
  // Réinitialiser les valeurs mises à jour lorsque vous quittez le mode édition
  if (!editMode.value) {
    updatedTitle.value = order.value.title
    updatedDescription.value = order.value.description
  }
}

const handleUpdateOrder = async () => {
  await updateOrder({
    orderId: order.value._id,
    orderData: {
      title: updatedTitle.value,
      description: updatedDescription.value
    }
  })
  // Sortir du mode édition après la mise à jour
  editMode.value = false
}
</script>

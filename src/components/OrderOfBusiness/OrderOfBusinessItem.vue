<template>
  <li class="border p-4 mb-4 transition duration-300 ease-in-out transform hover:scale-105">
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p class="text-gray-700">{{ description }}</p>
      </div>
      <div class="flex space-x-4">
        <button @click="handleDeleteOrder" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Supprimer
        </button>
        <button @click="toggleEditMode" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Modifier
        </button>
      </div>
    </div>

    <!-- Formulaire de mise à jour -->
    <form v-if="editMode" @submit.prevent="handleUpdateOrder" class="mt-4">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700">Titre:</label>
        <input
          v-model="updatedTitle"
          type="text"
          id="title"
          required
          class="border w-full px-4 py-2 rounded focus:outline-none focus:border-primary transition duration-300"
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description:</label
        >
        <textarea
          v-model="updatedDescription"
          id="description"
          required
          class="border w-full px-4 py-2 rounded focus:outline-none focus:border-primary transition duration-300"
        ></textarea>
      </div>

      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Enregistrer
      </button>
    </form>
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useOrderOfBusinessStore } from '@/stores/orderOfBusiness';

const { deleteOrder, updateOrder, fetchAllOrders } = useOrderOfBusinessStore();

const { order } = defineProps(['order']);
const { title, description, _id } = order;

const editMode = ref(false);
const updatedTitle = ref(title);
const updatedDescription = ref(description);

// Utilisez une variable réactive pour forcer la mise à jour du composant
const componentKey = ref(0);

// Observer les changements dans la variable componentKey et déclencher fetchAllOrders
watch(() => componentKey.value, async () => {
  try {
    await fetchAllOrders();
  } catch (error) {
    console.error('Erreur lors du chargement des ordres du jour :', error);
  }
});

const handleDeleteOrder = async () => {
  await deleteOrder(_id);
  // Incrémentez componentKey pour déclencher la mise à jour du composant
  componentKey.value += 1;
};

const toggleEditMode = () => {
  editMode.value = !editMode.value;
  // Réinitialiser les valeurs mises à jour lorsque vous quittez le mode édition
  if (!editMode.value) {
    updatedTitle.value = title;
    updatedDescription.value = description;
  }
};

const handleUpdateOrder = async () => {
  try {
    await updateOrder({
      orderId: _id,
      orderData: {
        title: updatedTitle.value,
        description: updatedDescription.value
      }
    });

    // Incrémentez componentKey pour déclencher la mise à jour du composant
    componentKey.value += 1;

    // Sortir du mode édition après la mise à jour
    editMode.value = false;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'ordre du jour :", error);
  }
};
</script>

<template>
  <div class="bg-primary min-h-screen flex items-center justify-center">
    <div class="text-center p-8 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
      <h1 class="text-4xl font-bold text-primary mb-4">Bienvenue sur ParliaTrack</h1>
      <p class="text-lg text-text mb-8">
        La solution innovante de gestion des sessions parlementaires
      </p>
      <router-link
        to="/order-of-business"
        class="inline-block bg-primary text-white py-3 px-6 rounded-md transition duration-300 hover:bg-text focus:outline-none focus:ring focus:border-secondary"
      >
        Voir l'ordre du jour
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

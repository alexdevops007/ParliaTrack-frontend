<template>
  <div class="min-h-screen flex flex-col bg-background text-text font-sans">
    <!-- Header section -->
    <header class="bg-primary text-white py-4">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold">ParliaTrack</h1>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="flex-1 container mx-auto py-8">
      <!-- Slot pour le contenu principal -->
      <slot></slot>
    </main>

    <!-- Footer section -->
    <footer class="bg-secondary text-white py-4">
      <div class="container mx-auto">
        <p>&copy; 2024 ParliaTrack. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MainLayout',
};
</script>

<style scoped>
/* Styles spécifiques au layout ici */
</style>

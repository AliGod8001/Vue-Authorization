<template>
  <the-header />
  <slot />
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'
  import TheHeader from './TheHeader.vue';

  const store = useStore()
  
  onMounted(() => {
    store.dispatch("auth/setInitialState")
  })
</script>
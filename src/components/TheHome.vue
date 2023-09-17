<template>
  <main class="main">
    <h1 class="main-title">{{ auth.token ? auth.user.email : "" }} Wellcome to authorization app</h1>
  </main>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()

  const auth = store.state.auth
</script>

<style scoped>
  .main {
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main .main-title {
    font-weight: 900;
    font-size: 30px;
    color: #8d72ff;
  }
</style>
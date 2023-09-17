<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/vite.svg" alt="vite logo image">
        <span>Authorization App</span>
      </div>
    </router-link>

    <div v-if="auth.token" class="actions">
        <button class="main-btn main-btn-primary">
          {{ auth.user.email }}
        </button>
        <button class="main-btn main-btn-danger" @click="logoutClickHandler">Logout</button>
    </div>
    <div v-else class="actions">
      <router-link to="/login">
        <button class="main-btn main-btn-primary">Login</button>

      </router-link>
      <router-link to="/register">
        <button class="main-btn main-btn-secondary">Register</button>
      </router-link>
    </div>
  </header>
</template>

<script setup>
  import { useStore, mapState } from 'vuex';
  import { useToast } from 'vue-toastification';

  const toast = useToast()
  const store = useStore()
  const auth = store.state.auth

  const logoutClickHandler = () => {
    store.dispatch("auth/logout")
    toast.success("Your are Logout Successfully.", {
      timeout: 2500
    })
  }
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 50px;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.09) 0 3px 12px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .logo img {
    width: 50px;
  }

  .logo span {
    font-weight: 900;
    font-size: 20px;
    color: #444040;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
  }
</style>
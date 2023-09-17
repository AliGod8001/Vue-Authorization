<template>
  <card-component>
    <form @submit.prevent="formSubmitHandler">
      
      <div class="logo">
        <img src="/vite.svg" alt="vite logo image">
        <div class="title">Authrization App | Register</div>
      </div>

      <div class="control">
        <label for="email">Email:</label>
        <input name="email" id="email" type="email" placeholder="email..." v-model.trim="email" />
      </div>

      <div class="control">
        <label for="password">Password:</label>
        <input name="password" id="password" type="password" placeholder="password..." v-model.trim="password" />
      </div>

      <div class="action">
        <button class="main-btn main-btn-primary" :class="{ 'overlay-loading': loading }" type="submit">Register</button>
      </div>
    </form>
  </card-component>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex';
  import { useToast } from "vue-toastification";
  import { useRouter } from 'vue-router';
  import CardComponent from '../ui/CardComponent.vue'

  const router = useRouter()
  const store = useStore()
  const toast = useToast()

  const email = ref("")
  const password = ref("")
  const loading = ref(false)

  const formSubmitHandler = async () => {
    if ( email.value.length < 3 || password.value.length < 3 ) {
      toast.error("Enter Your Email and Password", {
        timeout: 2500
      })
    }

    loading.value = true
    const res = await store.dispatch("auth/register", {
      email: email.value,
      password: password.value
    })
    loading.value = false

    if ( res.data ) {
      toast.success("Your Successfully Registered", {
        timeout: 2500
      })

      setTimeout(() => {
        router.push("/")
      }, 1500);
    } else {
      toast.error(res.statusText, {
        timeout: 2500
      })
    }
  }

</script>

<style scoped>
  .logo {
    text-align: center;
    margin: 50px;
  }

  .logo img {
    width: 80px;
    margin-bottom: 15px;
  }

  .logo .title {
    color: #8d72ff;
    font-weight: 900;
    font-size: 20px;
  }

  .control {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-bottom: 20px;
  }

  .control label {
    min-width: 70px;
    font-weight: 600;
    font-size: 14px;
    color: #646060;
  }

  .control input {
    outline: none;
    background-color: transparent;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #dddddd80;
    color: #545050;
    font-weight: 500;
    font-size: 15px;
  }

  .control input::placeholder {
    color: #949090;
    font-size: 13px;
  }

  .action button {
    width: 100%;
  }
</style>
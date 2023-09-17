<template>
  <div>
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .card {
    max-width: 500px;
    padding: 30px;
    margin: 0 auto;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
</style>
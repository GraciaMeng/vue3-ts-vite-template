<template>
  <img alt="Vue logo" src="./assets/img/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
<script setup lang="ts"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

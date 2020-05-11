

<template>
  <div id="app">
    <div class="container">
    <div class="row">
        <app-result />
    </div>
  </div>
  </div>
</template>

<script langs="ts">
import Result from './components/Result'

export default {
  name: 'App',
  components: {
      appResult: Result,
    },
}

</script>

<style scoped>
</style>

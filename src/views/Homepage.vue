<template>
  <div class="home">
    <Home />
    <Offer />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Homepage',
  components: {
    Home
  }
}
</script>

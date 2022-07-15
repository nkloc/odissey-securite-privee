<template>
  <div class="home">
    <Home />
    <Offer />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Offer from '@/components/Offer.vue'
import About from '@/components/About.vue'

export default {
  name: 'Homepage',
  components: {
    Home,
    Offer,
    About
  }
}
</script>

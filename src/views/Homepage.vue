<template>
  <div class="home">
    <Home />
    <Offer />
    <About />
    <References />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Offer from '@/components/Offer.vue'
import About from '@/components/About.vue'
import References from '@/components/References.vue'

export default {
  name: 'Homepage',
  components: {
    Home,
    Offer,
    About,
    References
  }
}
</script>

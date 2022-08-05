<template>
  <div class="home">
    <Home />
    <Offer />
    <About id="about" />
    <References id="references" />
    <Opinions />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Offer from '@/components/Offer.vue'
import About from '@/components/About.vue'
import References from '@/components/References.vue'
import Opinions from '@/components/Opinions.vue'

export default {
  name: 'Homepage',
  components: {
    Home,
    Offer,
    About,
    References,
    Opinions
  }
}
</script>

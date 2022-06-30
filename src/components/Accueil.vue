<template>
  <div class="home">
    <Burger />
  </div>
</template>

<script>
import Burger from '@/components/Burger.vue'
export default {
  name: 'Accueil',
  components: {
    Burger
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home {
  background: red
  height 1500px

}
</style>

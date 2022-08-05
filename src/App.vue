<template>
  <Header />
  <router-view/>
  <Footer id="contact" />
</template>

<style lang="stylus">
#app {
  font-family $font, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color $black-color
  line-height: 1.4;
}
</style>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>


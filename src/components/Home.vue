<template>
  <section class="home">
    <div class="left">
      <h1>Odissey <br> Sécurité <br> Privée</h1>
      <span>Partenaire de groupe spécialisé dans la surveillance humaine basée en Île-De-France, dont l'ambition est d'offrir à ses clients <b>un panel d'agents qualifiés qui vous protègeront des incendies, des agressions, des risques terroristes...</b></span>
      <Button text="Découvrir" />
    </div>
    <div class="right">
      <img src="@/assets/png/accueil-1.png" alt="Image de l'agent de sécurité">
    </div>
  </section>
</template>

<script>
import Button from '@/components/kit/Button.vue'
export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home {
  margin 30px;
  display: flex;
  @media tablet {
    flex-direction: column;
  }
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding-left 30px;
  min-width 400px;
  text-align: left;
  @media tablet {
    min-width auto;
    width: 100%;
    padding: 0;
    text-align: center;
    align-items: center;
    margin-bottom: 50px;
  }
  h1 {
    font-size: 80px;
    line-height: 1.05;
    z-index 2;
    font-family: $font;
    letter-spacing: -0.01em;
    @media tablet {
      font-size: 70px;
    }
    &:after {
      content: '';
      display: block;
      width: 260px;
      height: 15px;
      position relative;
      bottom: 22px;
      left: 4.5px;
      background: $blue-color;
      z-index -1;
      @media tablet {
        display: none
      }
    }
  }
  span {
    font-size 20px;
    margin 25px 0;
    font-weight: 400;
    font-size: 17px;
    line-height: 146.3%;
    letter-spacing: 0.02em;
    @media tablet {
      width: 100%;
    }
    @media mobile {
      text-align: justify;
      margin: 30px 0;
    }
  }
}
.right {
  display: flex;
  justify-content: flex-end;
  width: 60%;
  min-width: 400px;
  &:after{
      content: '';
      display: block;
      width: 500px;
      height: 500px;
      background: transparent;
      position: absolute;
      margin-top: 30px;
      right: 12%;
      z-index: -1;
      border-radius: 50%;
      border: 2px dashed #393E46;
      @media mobile {
        display: none;
      }
  }
  @media tablet {
    min-width auto;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 40vw;
    height auto;
    @media tablet {
      width 100%;
      max-width: 800px;
    }
  }
}

</style>

<template>
  <section class="home">
    <div class="left">
      <h1>Odissey <br> Sécurité <br> Privée</h1>
      <span>Partenaire de groupe spécialisée dans la surveillance humaine basée en Île-De-France, dont l'ambition est d'offrir à ses clients <b>un panel d'agents qualifiés qui vous protègeront des incendies, des agressions, des risques terroristes...</b></span>
      <button>Découvrir</button>
    </div>
    <div class="right">
      <img src="@/assets/png/accueil-1.png" alt="Image de l'agent de sécurité">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home {
  margin: 30px;
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
    font-family: $font2;
    @media tablet {
      font-size: 70px;
    }
    &:after {
      content: '';
      display: block;
      width: 160px;
      height: 15px;
      position relative;
      bottom: 20px;
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
    @media tablet {
      font-size 16px;
      max-width 600px;
    }
  }
  button {
    outline none;
    border: none;
    background: $black-color;
    color: $gray-color;
    font-size: 16px;
    font-weight bold;
    cursor: pointer;
    border-radius: 10px;
    font-size 17px;
    width: 207px;
    height: 66px;
    text-transform: uppercase;
    letter-spacing: 2%;
  }
}
.right {
  display: flex;
  justify-content: flex-end;
  width: 60%;
  min-width: 400px;
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

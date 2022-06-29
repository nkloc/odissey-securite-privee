<template>
    <header>
        <ul>
            <li>Accueil</li>
            <li>Nos références</li>
            <li>À propos</li>
            <li>Nous contacter</li>
        </ul>
        <img src="@/assets/logo.svg" alt="Logo d'Odissey sécurité privée">
        <div class="links">
            <a href="https://www.google.com">
                <img src="@/assets/links/facebook.svg" alt="Facebook">
            </a>
            <a href="https://www.google.com">
                <img src="@/assets/links/linkedin.svg" alt="Linkedin">
            </a>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style lang="stylus" scoped>
header
    display flex
    justify-content space-between
    align-items center
    padding 0 20px
    border-bottom 1px solid #e5e5e5
    ul
        display flex
        list-style-type none
        width calc(50% - 80px)
        li
            margin-right 16px
    img
        width 80px
        height auto
    .links
        display flex
        align-items center
        justify-content flex-end
        width calc(50% - 80px)
        a
            display inline-block
            margin-right 10px
            img
                width 20px
                height 20px
                margin-right 5px
</style>
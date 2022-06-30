<template>
    <header :class="{fixed: showBurger }">
        <div class="desktop-only perfectWidth">
            <ul>
                <li class="active1">Accueil</li>
                <li>Nos références</li>
                <li>À propos</li>
                <li>Nous contacter</li>
            </ul>
        </div>

        <div class="containerLogoBurger">
            <img :class="{marginLeft: showBurger}" src="@/assets/logo.svg" alt="Logo d'Odissey sécurité privée">
            <Burger :class="{marginRight: showBurger}" class="tablet-only" @click.stop.prevent.self="toggleBurger" />
        </div>
    
        <div class="desktop-only perfectWidth">
            <div class="links">
                <a href="https://www.google.com">
                    <img src="@/assets/links/facebook.svg" alt="Facebook">
                </a>
                <a href="https://www.google.com">
                    <img src="@/assets/links/linkedin.svg" alt="Linkedin">
                </a>
            </div>
        </div>

        <div class="menu-burger-active" v-if="showBurger">
            <ul>
                <li class="active1">Accueil</li>
                <li>Nos références</li>
                <li>À propos</li>
                <li>Nous contacter</li>
            </ul>
            <div>
                <img src="@/assets/links/facebook.svg" alt="Facebook">
                <img src="@/assets/links/linkedin.svg" alt="Linkedin">
            </div>
        </div>
    </header>
</template>

<script>
    import Burger from '@/components/Burger.vue'
    export default {
        name: 'Home',
        data() {
            return {
                showBurger: false,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            }
        },
        created() {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth
                this.windowHeight = window.innerHeight
            })
            this.onResize();
        },
        unmounted() {
            window.removeEventListener('resize', () => {
                this.windowWidth = window.innerWidth
                this.windowHeight = window.innerHeight
            })
        },
        methods: {
            toggleBurger() {
                this.showBurger = !this.showBurger
            },
            onResize() {
                this.windowWidth = window.innerWidth
                this.windowHeight = window.innerHeight
            }
        },
        components: {
            Burger
        }
    }
</script>

<style lang="stylus" scoped>
header {
    display flex
    justify-content space-between
    align-items center
    padding 20px
    background-color transparent
    z-index 1
}
.perfectWidth{
    width calc(50% - 80px)
}
ul {
    display flex
    list-style-type none
    li {
        margin-left 16px
    }
    .active {
        font-weight 600
    }
}
img {
    width 80px
    height auto
}
.links {
    display flex
    align-items center
    justify-content flex-end
    a {
        display inline-block
        margin-right 16px
        img {
            width 20px
            height 20px
        }
    }
}
.containerLogoBurger {
    @media tablet {
        display flex
        width 100%
        align-items space-between
        justify-content space-between
    }
}
.fixed {
    position fixed
    background white
    margin-top 0
    width 100%
    height 100%
    padding 20px 0
    display flex
    flex-direction column
    align-items center
}
.marginLeft {
    margin-left 20px
}
.marginRight {
    margin-right 20px
}
.menu-burger-active{
    position absolute
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width 100%
    display flex
    flex-direction column
    margin-bottom 50px
    ul {
        display flex
        flex-direction column
        li {
            font-size 32px
            margin-bottom 20px
            margin-left 0px
            text-transform uppercase
            font-weight bold
            white-space nowrap
        }
    }
    div {
        display flex
        justify-content center
        img {
            width 50px
            height 50px
            margin 25px
        }
    }
}
</style>
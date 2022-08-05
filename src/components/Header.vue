<template>
    <header :class="{fixed: showBurger }">
        <div class="desktop-only perfectWidth">
            <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#references">Nos références</a></li>
                <li><a href="#contact">Nous contacter</a></li>
            </ul>
        </div>

        <div class="containerLogoBurger">
            <img :class="{marginLeft: showBurger}" src="@/assets/logo.svg" alt="Logo d'Odissey sécurité privée">
            <div :class="{marginRight: showBurger}" class="tablet-only">
                <button id="button" class="menu" @click.prevent="toggleBurger" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
                    <svg width="50" height="50" viewBox="0 0 100 100">
                        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </button>
            </div>
        </div>
    
        <div class="desktop-only perfectWidth">
            <div class="links">
                <a href="https://www.linkedin.com/in/jamel-hamaidia-5b4972239/">
                    <img src="@/assets/links/linkedin.svg" alt="Linkedin">
                </a>
            </div>
        </div>
        
        <Transition>
            <div class="menu-burger-active" v-if="showBurger">
                <ul>
                    <li><a @click.prevent="scrollToAndClose('home')">Accueil</a></li>
                    <li><a @click.prevent="scrollToAndClose('about')">À propos</a></li>
                    <li><a @click.prevent="scrollToAndClose('references')">Nos références</a></li>
                    <li><a @click.prevent="scrollToAndClose('contact')">Nous contacter</a></li>
                </ul>
                <div>
                    <a href="https://www.linkedin.com/in/jamel-hamaidia-5b4972239/">
                        <img src="@/assets/links/linkedin.svg" alt="Linkedin">
                    </a>
                </div>
            </div>
        </Transition>
        
    </header>
</template>

<script>
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
            },
            buttonClicked() {
                const element = document.getElementById('button')
                element.classList.toggle('opened');element.setAttribute('aria-expanded', element.classList.contains('opened'))
            },
            jumpTo(anchor) {
                window.location.href = "#"+anchor
            },
            scrollToAndClose(anchor) {
                this.jumpTo(anchor);
                this.buttonClicked();
                this.showBurger = false;
            },
        },
    }
</script>

<style lang="stylus" scoped>
header {
    display flex
    justify-content space-between
    align-items center
    padding 20px
    z-index 50
}
.perfectWidth{
    width calc(50% - 80px)
}
ul {
    display flex
    list-style-type none
    a {
        text-decoration none
        color: $black-color
        &:hover{
            color: $blue-color;
            transition: color 0.5s ease;
        }
    }
    li {
        margin-left 16px
        cursor pointer
        color: $black-color
        &:hover{
            color: $blue-color;
            transition: color 0.5s ease;
        }
    }
    .active {
        font-weight 600
    }
}
img {
    width 80px
    height auto
    @media tablet {
        width 50px
    }
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
            &:hover{
                filter: invert(55%) sepia(24%) saturate(1327%) hue-rotate(186deg) brightness(103%) contrast(103%);
            }
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
    top 0
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
            cursor pointer
            &:hover {
                filter: invert(55%) sepia(24%) saturate(1327%) hue-rotate(186deg) brightness(103%) contrast(103%);
            }
        }
    }
}


// menu burger css

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}

//transition animation
.v-enter-active,{
  transition: opacity 1s ease;
}

.v-enter-from,{
  opacity: 0;
}
</style>
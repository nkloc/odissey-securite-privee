<template>
    <section class="about">
        <div class="left">
            <img src="@/assets/png/about.png" alt="Image de Paris">
        </div>
        <div class="right">
            <h2 class="h2Title">
                <b>À Propos</b> <br> d’Odissey
            </h2>
            <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Button text="En savoir plus" />
        </div>
        
    </section>
</template>

<script>
import Button from '@/components/kit/Button.vue'
    export default {
        name: 'Homepage',
        components: {
            Button
        }
    }
</script>

<style lang="stylus" scoped>
.about {
    margin: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media tablet {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
}
img {
    width: 50vw;
    height auto;
}
.right {
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    p {
        width: 66%;
        font-weight: 400;
        font-size: 17px;
        line-height: 146.3%;
        letter-spacing: 0.02em;
        margin: 25px 0;
        @media tablet {
            max-width: 500px;
            text-align: justify;
            margin: 30px 0;
            width: 100%;
        }
    }
    @media tablet {
        width: 100%;
        text-align: center;
        align-items: center;
    }
}
</style>
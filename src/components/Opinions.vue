<template>
    <section class="opinions">
        <h2 class="h2Title">
            <b>Nos Avis</b> <br>
            Ce que l'on dit de Nous
        </h2>
        <div class="opinion-container">
            <Opinion
                name="Stéphanie Lambert"
                job="Directrice Commerciale d’Auchan"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            />
            <Opinion
                name="Stéphanie Lambert"
                job="Directrice Commerciale d’Auchan"
                text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            />
        </div>
    </section>
</template>

<script>
import Opinion from '@/components/Opinion.vue'
    export default {
        name: 'Opinions',
        components: {
            Opinion
        },
    }
</script>

<style lang="stylus" scoped>
.opinions {
    display: flex;
    flex-direction: column;
}
.opinion-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    flex-wrap: wrap;
    .opinion {
        margin 20px;
    }
}
</style>
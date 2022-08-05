<template>
    <section class="opinions">
        <h2 class="h2Title">
            <b>Ils parlent</b> <br>
            d'Odissey Sécurité Privée
        </h2>
        <div class="opinion-container">
            <Opinion
                name="Dimitri KLOC"
                job="Responsable Secteur chez France Gardiennage"
                text="Je collabore depuis 8 ans avec Jamel Hamaidia, CEO d’Odissey Sécurité Privée. C’est une source fiable d’agents de sécurité de qualité, lorsque j’ai des besoins très spécifiques et périodiques."
            />
            <Opinion
                name="Stéphanie Lambert"
                job="Directrice Commerciale d’Auchan"
                text="Les agents d’Odissey Sécurité Privée sont très professionnels et respectueux du règlement des différents sites sur lesquels je fais appel à eux. Je recommande Odissey ! Vive Odissey !"
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
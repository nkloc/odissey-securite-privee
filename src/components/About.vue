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
                Odissey Sécurité Privée est basée en Île-de-France et c'est là que nous avons développé une solide expérience dans le domaine de la sécurité des personnes, des biens et des lieux.
                <br><br>
                Notre équipe est composée d’agents expérimentés, ayant acquis une grande expertise dans le domaine de la sécurité privée et de la protection des personnes.
                <br><br>
                Nous sommes à votre écoute pour vous rencontrer et discuter de vos besoins, afin de vous offrir la prestation qui répondra parfaitement à vos attentes.
                <br><br>
               <b class="important-text"> Nous vous proposons des prestations personnalisées sur mesure, adaptées à vos besoins et à votre situation. </b>
            </p>
            <!-- <Button text="En savoir plus" /> -->
        </div>
        
    </section>
</template>

<script>
// import Button from '@/components/kit/Button.vue'
    export default {
        name: 'Homepage',
        // components: {
        //     Button
        // }
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
    width: 40vw;
    height auto;
    @media tablet {
        width: 70%;
    }
}
.important-text{
    font-weight 600;
}
.right {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    p {
        width: 80%;
        font-weight: 400;
        font-size: 16px;
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
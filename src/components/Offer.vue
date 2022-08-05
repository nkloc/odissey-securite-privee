<template>
    <section class="offer">
        <div class="top">
            <h2 class="h2Title">
                <b>Notre Offre</b><br>d'Agents De Sécurité
            </h2>
        </div>
        <div class="bottom">
            <div class="cards-container">
                <Card class="mobile-width" imageName="ssiap1" title="Agents de sécurité" description="À l'entrée de bâtiments ou d'espaces publics, lors de rondes de nuit ou de vérifications, il assure la protection des biens et des personnes." />
                <Card class="mobile-width" imageName="ssiap1" title="Agents de sécurité aéroportuaire" description=" Du contrôle des passagers, des billets d'avion, des bagages, du personnel de l'aéroport, il est garant de la sécurité." />
                <Card class="mobile-width" imageName="ssiap1" title="Ssiap 1 et 2" description="Les agents SSIAP1 et SSIAP2 ont pour mission d’assurer la sécurité des personnes et la sécurité incendie des biens. " />
                <Card class="mobile-width" imageName="ssiap1" title="Agents cynophiles" description="Un agent cynophile (ou maître-chien) peut assurer la sécurité de différents secteurs, en binôme avec un chien." />
            </div>
        </div>
    </section>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    name: 'Home',
    components: {
        Card
    }
}
</script>

<style lang="stylus" scoped>
.offer {
    min-height: 50vh;
    background: black;
    padding: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 400px 0px 0px;
    width: calc(100% - 100px);
    &:after{
        content: '';
        display: block;
        width: 500px;
        height: 500px;
        background: transparent;
        position: absolute;
        margin-top: -70px;
        right: 20px;
        z-index: -1;
        border-radius: 50%;
        border: 2px dashed #393E46;
        @media tablet {
            display: none;
        }
    }
    @media tablet {
        border-radius 0;
    }
}
.top {
    text-align: center;
}
.bottom {
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
    .cards-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        overflow: auto;
        @media tablet {
            justify-content: space-around;
        }
    }
}
.mobile-width{
    @media mobile {
        width: 100%;
    }
}

</style>
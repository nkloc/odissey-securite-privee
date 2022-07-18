<template>
    <section class="offer">
        <div class="top">
            <h2 class="h2Title">
                <b>Notre Offre</b><br>d'Agents De Sécurité
            </h2>
        </div>
        <div class="bottom">
            <div class="cards-container">
                <Card class="mobile-width" imageName="ssiap1" title="ssiap 1" description="Lorem Ipsum has been the industry's." />
                <Card class="mobile-width" imageName="ssiap1" title="ssiap 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <Card class="mobile-width" imageName="ssiap1" title="ssiap 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
                <Card class="mobile-width" imageName="ssiap1" title="ssiap 1" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
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
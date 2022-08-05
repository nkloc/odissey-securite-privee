<template>
    <section class="references">
        <div class="top">
            <h2 class="h2Title">
                <b>Nos références</b> <br> principales
            </h2>
            <p>
                Ils nous ont fait confiance. Pourquoi pas vous ?
            </p>
        </div>
        <div class="bottom">
            <div class="ref-container">
                <Reference imageName="monoprix" title="Monoprix"/>
                <Reference imageName="auchan" title="Auchan"/>
                <Reference imageName="leclerc" title="Leclerc"/>
                <Reference imageName="roissy" title="Roissy"/>
            </div>
        </div>
    </section>
</template>

<script>
import Reference from '@/components/Reference.vue'
    export default {
        name: 'References',
        components: {
            Reference
        }
    }
</script>

<style lang="stylus" scoped>
.references{
    display: flex
    flex-direction: column;
    padding 30px 0;
    height: auto;
    position relative
    width: auto;
    margin-bottom 80px;
    &:before{
        content: '';
        position absolute;
        background-color: white;
        height: 500px;
        width: 80vw;
        z-index: -1;
        top: 0;
        right: 0;
        border-radius: 400px 0px 0px 0px;
        @media tablet {
            display: none;
        }
    }
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom 30px;
    padding 0 50px;
    @media tablet {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding 0 30px;
    }
}
h2 {
    text-align: left;
    @media tablet {
        text-align: center;
        margin-bottom: 30px;
    }
}
p {
    width: 66%;
    font-weight: 400;
    font-size: 17px;
    line-height: 146.3%;
    letter-spacing: 0.02em;
    margin: 25px 0;
    text-align: right;
    @media tablet {
        max-width: 500px;
        text-align: justify;
        margin: 30px 0;
        width: 100%;
    }
}
.bottom {
    max-width: 100%;
    overflow: hidden;
    .ref-container {
        display: flex;
        flex-direction row;
        overflow: scroll;
        padding-left 30%;
        .reference {
            margin: 0 15px;
        }
        @media tablet {
            padding-left 0%;
        }
    }
}
</style>
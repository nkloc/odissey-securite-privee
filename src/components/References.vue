<template>
    <section class="references">
        <div class="top">
            <h2 class="h2Title">
                <b>Nos références</b> <br> principales
            </h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
            </p>
        </div>
        <div class="bottom">
            <div class="ref-container">
                <Reference imageName="desktop" title="Monoprix"/>
                <Reference imageName="desktop" title="Auchan"/>
                <Reference imageName="desktop" title="Leclerc"/>
                <Reference imageName="desktop" title="Roissy"/>
                <Reference imageName="desktop" title="Roissy"/>
                <Reference imageName="desktop" title="Roissy"/>
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
    }
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom 80px;
    padding 0 50px;
    @media tablet {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
h2 {
    text-align: left;
}
p {
    font-weight: 400;
    font-size: 17px;
    line-height: 146.3%;
    letter-spacing: 0.02em;
    max-width: 500px;
    text-align: right;
    @media tablet {
        text-align: justify;
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
    }
}
</style>
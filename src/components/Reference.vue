<template>
    <div class="reference">
        <div class="top">
            <img class="desktop-img" :src="require(`@/assets/svg/${imageName}.svg`)" :alt="title">
            <img class="mobile-img" :src="require(`@/assets/svg/${imageName}-mobile.svg`)" :alt="title">
        </div>
        <div class="bottom">
            <h3>
                {{ title }}
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Reference',
        props: {
            imageName: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="stylus" scoped>
.reference {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding 0 12px;
    background: $gray-color;
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 300px;
    min-width 300px;
    height: 250px;
    min-height: 250px;
}
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    img {
        height: 180px;
        width: auto;
    }
    
}
.bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

</style>
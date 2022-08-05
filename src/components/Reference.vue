<template>
    <div class="reference">
        <div class="top">
            <img class="logo" :src="require(`@/assets/svg/logos/${imageName}.svg`)" :alt="title">
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
    padding 8px 12px;
    background: $black-color;
    border-radius: 10px; 
    -webkit-border-radius : 10px;
    -moz-border-radius : 10px;
    width: 300px;
    min-width 300px;
    height: 250px;
    min-height: 250px;
}
.top {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    img {
        width: 80%;
    }
    
}
.bottom {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 146.3%;
        margin 4px 0;
        color: $white-color;
    }
}

</style>
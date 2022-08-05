<template>
    <div class="card">
        <div class="top">
            <div class="rectangle">
                <img :src="require(`@/assets/svg/${imageName}.svg`)" :alt="title">
            </div>
            <h4>
                {{ title }}
            </h4>
        </div>
        <p>
            {{ description }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            imageName: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
.card {
    width: 260px;
    height 200px;
    min-width 260px;
    padding 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    background: #EEEEEE;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media tablet {
        min-width: 0px;
        max-width: 260px;
        width: 100%;
        margin-right 0px;
    }
    .rectangle {
        width: 52px;
        height: 48px;
        background: $background2;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        img {
            width: 32px;
            height: 32px;
        }
    }
    h4 {
        font-size: 16px;
        letter-spacing: 0.055em;
        text-transform: uppercase;
        color: $black-color;
        margin: 20px 0;
        text-align: left;
    }
    p {
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: $background2;
        text-align: left;
    }
}
</style>
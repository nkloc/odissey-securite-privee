<template>
    <div class="opinion">
        <img :src="require(`@/assets/svg/talk.svg`)" alt="icone de parole">
        <p class="text">{{ text }}</p>
        <p class="person">
            <b>{{ name }}</b>
            <br>
            {{ job }}
        </p>
        
    </div>
</template>

<script>
    export default {
        name: 'Opinion',
        props: {
            name: {
                type: String,
                required: true
            },
            job: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
        }
    }
</script>

<style lang="stylus" scoped>
.opinion {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: #EEEEEE;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding 20px;
    width: 33%;
    @media tablet {
        width: 500px;
    }
}
p {
    font-weight: 400;
    font-size: 17px;
    line-height: 159.3%;
    letter-spacing: 0.02em;
    max-width: 500px;
    color: $black-color;
    text-align: justify;
}
.text {
    margin: 20px 0;
}
.person {
    padding-left: 10%;
    &:before{
        content: '';
        display: block
        position absolute
        width: 22px;
        height: 5px;
        margin-left: -32px;
        margin-top: 12px;
        background: $black-color;
    }
}
</style>
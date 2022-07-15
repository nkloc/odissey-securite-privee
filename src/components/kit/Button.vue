<template>
   <button>{{text}}</button>
</template>

<script>
    export default {
        name: 'button',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
button {
    outline none;
    border: none;
    background: $black-color;
    color: $gray-color;
    font-size: 16px;
    font-weight bold;
    cursor: pointer;
    border-radius: 10px;
    font-size 17px;
    width: 207px;
    height: 66px;
    text-transform: uppercase;
    letter-spacing: 2%;
}
</style>
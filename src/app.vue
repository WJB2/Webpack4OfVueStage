<template>
    <div id="app">
        <img :src="backgroundUrl" alt="" width=200 height=200 />
    </div>
</template>

<script>

export default{
    data() {
        return{
            backgroundUrl:require('./../assets/background.jpg'),
        }
    },
}
</script>

<style lang="scss">
@import "./styles/main.css";
@import "./styles/main.scss";
</style>
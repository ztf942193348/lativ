<template>
    <div @click="goback">
        <van-icon name="arrow-left"/>
    </div>
</template>
<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    div{
        width: 50px;
        height: 50px;
        position: fixed;
        left: 50px;
        top: 50px;
        border-radius: 50%;
        opacity: 0.8;
    }
</style>

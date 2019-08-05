<template>
    <div>
        <router-view></router-view>
        <Zfooter></Zfooter>
        <Lsales />
    </div>
</template>
<script>
/* eslint-disable */
import Zfooter from '../components/Zfooter'
import Zhome from './second/Zhome'
import Lsales from '../components/Lsales'
export default {
    components:{
        Zfooter,
        Zhome,
        Lsales
    }
}
</script>

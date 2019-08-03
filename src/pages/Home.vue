<template>
    <div>
        <router-view></router-view>
        <Zfooter></Zfooter>
    </div>
</template>
<script>
import Zfooter from '../components/Zfooter'
import Zhome from './second/Zhome'
export default {
    components:{
        Zfooter,
        Zhome
    }
}
</script>

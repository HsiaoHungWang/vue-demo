<script setup>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

    defineProps({
        id:String
    })
    //取得路由參數的值
    const route = useRoute()
    watchEffect(()=>{
        console.log('id：', route.params.id)
    })
    
</script>

<template>
    <div>
        <!--在 template 中取得路由參數的值-->
        <!--第一種寫法 $route.params.[參數名稱]-->
<h2>Member Center {{ $route.params.id }}</h2>
<p>會員編號 {{ id }}</p>
<!--第二種寫法-->
<!--
1. 路由設定檔中加上 props:true
2. 在script，透過defineProps 宣告參數
3. 在 tempate 中 {{ id }}
-->
    </div>
</template>

<style lang="css" scoped>

</style>
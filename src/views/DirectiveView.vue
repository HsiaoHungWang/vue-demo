<script setup>
import { ref } from 'vue';

    const message = ref('Hello Vue!!')
    const iSpan = ref('<a href="https://www.ispan.com.tw">iSpan</a>')
    const isLoading = ref(true)
    const isLoggedIn = ref(true)

   const regions = ref([
     {"code":"100","name":"中正區"},     
     {"code":"103","name":"大同區"},
     {"code":"104","name":"中山區"},   
     {"code":"106","name":"大安區"}
   ])
   const selectedOption = ref('106')
   const user = ref({"name":"Jack","age":30,"email":"Jack@company.com"})
</script>

<template>
    <div>
 <h2>Directives Demo</h2>
 <p>{{ message }}</p>
 <p v-text="message"></p>
 <div v-text="iSpan"></div>
 <div v-html="iSpan"></div>
 <img src="/loading.gif" alt="loading..." v-show="isLoading" />
 <div v-if="isLoggedIn">
    <p>isLoggedIn 為 True </p>
    <button @click="isLoggedIn=!isLoggedIn">登出</button>
 </div>
 <div v-else>
    <p>isLoggedIn 為 False </p>
    <button @click="isLoggedIn=!isLoggedIn">登入</button>
 </div>
 <!--v-for 讀取陣列-->
 <select v-model="selectedOption">
   <!-- region = {"code":"100","name":"中正區"}-->
    <option v-for="(region,index) in regions" :value="region.code" :key="region.code">{{index}} {{region.name}}</option>    
 </select>
 <span>{{ selectedOption }}</span>
 <!--v-for 讀取物件-->
 <ul>
   <!--{key:value}-->
   <li v-for="(value, key) in user">{{key}}:{{ value }}</li>
 </ul>

 <!--v-for 產生數字範圍 -->

  <ul class="pagination pagination-lg">   
    <li class="page-item" v-for="i in 8"><a class="page-link" href="#">{{ i }}</a></li>
  </ul>

    </div>
</template>

<style lang="css" scoped>

</style>
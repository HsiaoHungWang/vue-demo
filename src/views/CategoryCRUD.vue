<script setup>
import { ref } from 'vue';

const BASE_URL = import.meta.env.VITE_APIURL
const API_URL = `${BASE_URL}/category/`
const categories = ref([])

    // const API_URL = 'http://127.0.0.1:8000/api/category/'
    const loadCategories = async ()=>{
         const response = await fetch(API_URL)
         const datas = await response.json()
         console.log(datas)
         categories.value = datas
         console.log(categories.value)
    }
    loadCategories()
</script>

<template>
    <div>
 <h2>分類資料管理</h2>
 <div class="row">
    <div class="col-4">
        <ul class="list-group">
  <li v-for="category in categories" :key="category.categoryid" class="list-group-item d-flex justify-content-between align-items-center">
   {{ category.categoryname }}
   <div>
    <span class="badge text-bg-primary rounded-pill m-1"><i class="bi bi-pencil-square"></i></span>
    <span class="badge text-bg-danger rounded-pill m-1"><i class="bi bi-trash-fill"></i></span>
   </div>
  </li>
 
  
</ul>
    </div>
    <div class="col-4"></div>
    <div class="col-4"></div>
 </div>
    </div>
</template>

<style lang="css" scoped>

</style>
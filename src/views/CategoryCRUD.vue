<script setup>
    const API_URL = 'http://127.0.0.1:8000/api/category/'
    const loadCategories = async ()=>{
         const response = await fetch(API_URL)
         const datas = await response.json()
         console.log(datas)
    }
    loadCategories()
</script>

<template>
    <div>
 <h2>分類資料管理</h2>
    </div>
</template>

<style lang="css" scoped>

</style>
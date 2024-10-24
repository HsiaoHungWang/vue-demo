<script setup>
import { ref } from 'vue';

    //串接 API => Ajax fetch()
    // fetch('http://127.0.0.1:8000/api/spots/')
    //   .then(response=>response.json())
    //   .then(datas=>console.log(datas))
    const results = ref([])
    const loadSpots = async()=>{
        const response  = await fetch('http://127.0.0.1:8000/api/spots/')
        const datas = await response.json() 
        console.log(datas)       
        results.value = datas
        console.log(results.value)
    }

    loadSpots()
</script>

<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div v-for="{spotid, spottitle, spotdescription, spotimage, address} in results" class="col">
    <div class="card h-100">
      <img :src="spotimage" class="card-img-top" :alt="spottitle">
      <div class="card-body">
        <h5 class="card-title">{{ spottitle }}</h5>
        <p class="card-text">{{ spotdescription.length <= 100 ? spotdescription : spotdescription.substring(0,100) }}...</p>
      </div>
      <div class="card-footer">
      <small class="text-body-secondary">{{address}}</small>
    </div>
    </div>
  </div>
 
</div>
</template>

<style lang="css" scoped>

</style>
<script setup>
import PagingComponent from '@/components/PagingComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import { ref, watchEffect } from 'vue';

//串接 API => Ajax fetch()
// fetch('http://127.0.0.1:8000/api/spots/?categoryid=3&search=山&page=2&page_size=5&ordering=-spotid')
//   .then(response=>response.json())
//   .then(datas=>console.log(datas))

//資料的搜尋、分頁、排序
const ITEM = ref({
  "categoryid": 0,
  "search": "",
  "ordering": "spotid",
  "page": 1,
  "page_size": 20
})

//將ITEM資料轉成QueryString
const toQueryString = params => {
  return Object.keys(params)
    .filter(key => params[key] !== 0 && params[key] !== "")
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}

// const queryString = toQueryString(ITEM.value);
// console.log(queryString);

const SPOTS = ref([]) //接收API回傳的結果
const BASE_URL = import.meta.env.VITE_APIURL
const API_URL = `${BASE_URL}/spots/`

//?categoryid=3&search=山&page=2&page_size=5&ordering=-spotid
watchEffect(async () => {
  // const params = new URLSearchParams({
  //   "categoryid": ITEM.value.categoryid,
  //   "search": ITEM.value.search,
  //   "ordering": ITEM.value.ordering,
  //   "page": ITEM.value.page,
  //   "page_size": ITEM.value.page_size
  // })
  // console.log(params.toString())
  // const URL_PARAMS = `${API_URL}?${params.toString()}`

  const URL_PARAMS = `${API_URL}?${toQueryString(ITEM.value)}`
  const response = await fetch(URL_PARAMS)
  const datas = await response.json()
  console.log(datas)
  SPOTS.value = datas
  console.log(SPOTS.value)



})

//page 會由子組件傳過來
//分頁功能
const pagingHandler = page => {
  ITEM.value.page = page
}

//關鍵字搜尋
//keyword 就是子組件傳過來的資料
const searchHandler = keyword => {
  ITEM.value.search = keyword
}


</script>

<template>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4"></div>
    <div class="col-4">
      <SearchComponent @searchInput="searchHandler"></SearchComponent>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <PagingComponent @goPaging="pagingHandler" :thePage="SPOTS.current_page" :totalPages="SPOTS.total_page">
    </PagingComponent>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div v-for="{ spotid, spottitle, spotdescription, spotimage, address } in SPOTS.results" class="col" :key="spotid">
      <div class="card h-100">
        <img :src="spotimage" class="card-img-top" :alt="spottitle">
        <div class="card-body">
          <h5 class="card-title">{{ spotid }} {{ spottitle }}</h5>
          <p class="card-text">{{ spotdescription.length <= 100 ? spotdescription : spotdescription.substring(0, 100)
              }}...</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">{{ address }}</small>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="css" scoped></style>
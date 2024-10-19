<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
import { useCounterStore } from '@/stores/counter';
const storeCounter = useCounterStore()



import { ref } from 'vue';

const abcd = ref("xyz")
const parentData = ref("")
//data 會收到子組件傳過來的值
const myHandler = data => {
  alert(data)
  parentData.value = data
}

</script>

<template>
    <div>
        <h2>Contact Page {{ parentData }}</h2>
        <!--
        message、title 是自訂屬性名稱，用來將資料傳遞給子組件
        myEvent 是一個自訂事件名稱，目前不知如何觸發此事件
        -->
        <ChildComponent message="Hello World!!" :title="abcd" @myEvent="myHandler"></ChildComponent>
        <hr />
        <h2>資料來自 pinia store</h2>
        <input type="number" v-model="storeCounter.count">
        <span>{{ storeCounter.count }}</span>
        <span>{{ storeCounter.doubleCount }}</span>
        <button @click="storeCounter.add">add</button>
    </div>
</template>

<style lang="css" scoped></style>
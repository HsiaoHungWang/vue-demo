<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
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
    </div>
</template>

<style lang="css" scoped></style>
<script setup>
import { onBeforeMount, onMounted } from 'vue';

onBeforeMount(()=>{
    console.log('before-mount')
})
//組件已經綁定到真實的DOM上
onMounted(()=>{
    console.log('mounted')
    const myH = document.querySelector('#theH')
   console.log(myH.textContent)
})
</script>
<template>
    <h2 id="theH">My First Component</h2>
</template>
<style scoped>
h2{
    color:green
}
</style>
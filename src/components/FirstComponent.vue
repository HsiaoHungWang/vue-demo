<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';

// onBeforeMount(()=>{
//     console.log('before-mount')
// })
// //組件已經綁定到真實的DOM上
// onMounted(()=>{
//     console.log('mounted')
//     const myH = document.querySelector('#theH')
//    console.log(myH.textContent)
// })
const show = ref(true)

</script>
<template>
    <button @click="show=!show">Toggle</button>
    <Transition>
        <h2 id="theH" v-if="show">My First Component</h2>
    </Transition>
   
</template>
<style scoped>
h2{
    color:green
}
.v-enter-active,
.v-leave-active{
    transition: all 3s;
}
.v-enter-from,
.v-leave-to{
  opacity:0;
  transform: translateX(100px);
}
</style>
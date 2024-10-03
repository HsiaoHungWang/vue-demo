<script setup>
import { ref, watch, watchEffect } from 'vue';
import BMIComponent from './components/BMIComponent.vue';
import ButtonCount from './components/ButtonCount.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import ThirdComponent from './components/ThirdComponent.vue';

const formatTime = today => {
    const hours = String(today.getHours()).padStart(2, '0') //03、14
    const minutes = String(today.getMinutes()).padStart(2, '0')
    const seconds = String(today.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

const today = new Date()
const clock = ref(formatTime(today))
const clock1 = ref({
    day: today.getDay(),
    theTime: formatTime(today)
})
// console.log(clock.value)

// watch(clock, (newTime, oldTime) => {
//     console.log('new：', newTime)
//     console.log('old：', oldTime)
// }, { immediate: true, once: false })
//immediate: true 表示組件載入就要執行 watch

// watch(clock1, (newTime, oldTime) => {
//     console.log('new：', newTime)
//     console.log('old：', oldTime)
// }, { deep: true })

watchEffect(() => {
    console.log('effect1:', clock.value)
    console.log('effect2:', clock1.value.theTime)
})

//每隔一秒鐘讀取現在的時間
setInterval(() => {
    // clock.value = formatTime(new Date())
    clock1.value.theTime = formatTime(new Date())
}, 1000);

</script>

<template>
    <h2>Vue Demo：{{ clock }}{{ clock1.theTime }}</h2>
    <hr />
    <!-- 按下 Tab 鍵-->
    <!-- <FirstComponent></FirstComponent>
<first-component></first-component> 
<SecondComponent></SecondComponent>
<ThirdComponent></ThirdComponent>
<ButtonCount></ButtonCount>
<ComputedDemo></ComputedDemo>-->

    <BMIComponent></BMIComponent>

</template>

<style scoped></style>

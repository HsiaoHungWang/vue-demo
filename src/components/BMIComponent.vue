<script setup>
import { computed, ref } from 'vue';

const height = ref(180)
const weight = ref(80)

const calc = computed(() => {
    if (weight.value > 0 && height.value > 0) {
        const bmi = weight.value / Math.pow(height.value / 100, 2)
        return bmi.toFixed(2)
    } else {
        return 0
    }
})

</script>

<template>
    <div>
        <h2>BMI 計算</h2>
        <p>身高(公分)：<input type="text" v-model="height"></p>
        <p>體重(公斤)：<input type="text" v-model="weight"></p>
        <!-- <p>BMI：<span>{{ weight / Math.pow(height / 100, 2) }}</span></p> -->
        <p>BMI : <span>{{ calc }}</span></p>
    </div>
</template>

<style lang="css" scoped></style>
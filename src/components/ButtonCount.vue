<script setup>
import { nextTick, ref } from 'vue';
    const data = "abc"
    const count = ref(0)
    const add = async ()=>{
        // console.log(data)
        // console.log(count.value)
        count.value++
        await nextTick()
        const btn = document.querySelector('button')
        console.log(btn.textContent)

    }
</script>

<template>
    <div>
     <button @click="add">{{ count }}</button>
    </div>
</template>

<style lang="css" scoped>

</style>
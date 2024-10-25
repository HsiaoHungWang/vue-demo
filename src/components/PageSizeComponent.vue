<script setup>
import { ref } from 'vue'
const rows = ref(0)  //每頁幾筆
const emit = defineEmits(["PageSizeChange"])
const changeHandler = () => {
    emit("PageSizeChange", rows.value)
}

</script>

<template>
    <div class="mt-3">
        <select class="form-select" @change="changeHandler" v-model="rows">
            <option value="0">全部</option>
            <option value="10">每頁 10 筆資料</option>
            <option value="20">每頁 20 筆資料</option>
            <option value="30">每頁 30 筆資料</option>
            <option value="40">每頁 40 筆資料</option>
        </select>

    </div>
</template>
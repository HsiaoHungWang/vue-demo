<script setup>
import { ref } from 'vue'
const ordering = ref("spotid")
const emit = defineEmits(["sortChange"])
const changeHandler = () => {
    emit("sortChange", ordering.value)
}
</script>

<template>

    <select class="form-select" @change="changeHandler" v-model="ordering">
        <option value="spotid">景點編號升冪</option>
        <option value="-spotid">景點編號降冪</option>
        <option value="categoryid">分類編號升冪</option>
        <option value="-categoryid">分類編號降冪</option>
    </select>


</template>

<style lang="css" scoped></style>
<script setup>
    const props = defineProps({
        totalPages:Number
    })
    const emit = defineEmits(['goPaging'])

const clickHandler = page =>{
    emit('goPaging', page)
}
</script>

<template>
    <nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li @click="clickHandler(page)" class="page-item" v-for="(page, idx) in totalPages" :key="page">
      <span class="page-link">{{ page }}</span>
    </li>
   
  </ul>
</nav>
</template>

<style lang="css" scoped>

</style>
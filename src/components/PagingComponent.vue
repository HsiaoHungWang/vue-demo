<script setup>
import { computed, onMounted } from 'vue';


const props = defineProps({
  totalPages: Number,
  thePage: Number
})
const emit = defineEmits(['goPaging'])

const clickHandler = page => {
  emit('goPaging', page)
}

// 計算屬性來限制頁面數量
const limitedPages = computed(() => {
  return Array.from({ length: Math.min(props.totalPages, 10) }, (_, i) => i + 1);
});
</script>

<template>
  <nav>
    <ul class="pagination pagination-lg">
      <li @click="clickHandler(page)" class="page-item" v-for="(page, idx) in limitedPages" :key="page">
        <span :class="{ 'active': thePage === page, 'page-link': true }">{{ page }}</span>
      </li>
    </ul>
  </nav>
</template>

<style lang="css" scoped>
.page-item {
  cursor: pointer
}
</style>
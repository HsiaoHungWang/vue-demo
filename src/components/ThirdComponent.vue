<script setup>
import { ref } from 'vue';

    const i = ref(0);
    const week = ["日", "一", "二", "三", "四", "五", "六"]
    const author = ref({    
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})


    const isLogin = ref(false);
    const getName = () => {
        return 'Mary'
    };
    // const getName = () => 'Jack';
</script>

<template>
    <div>
      <h2>第三個組件 {{  getName() }}</h2>
      <p>{{ isLogin ? "yes" : "no" }}</p>
      <!--錯誤寫法 <p>{{ if(true){ return 'Hello '} }}</p> -->
      <p>{{ new Date().toLocaleDateString() }}</p>
      <!--錯誤寫法<p>{{ let name="Jack" }}</p> -->
      <p>{{ i+1 }}</p>
      <!--錯誤寫法 <p>{{ i+=1 }}</p> -->
      <p>星期{{week[new Date().getDay()]}}</p>
      <p>出版了書籍：{{author.books.length > 0 ? '是':'否'}}</p>
    </div>
</template>

<style scoped>

</style>
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
   
   const id = ref(10);
   const homeUrl = ref('https://www.ispan.com.tw');
   const isDisabled = ref(true);
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
      <hr />
      <!--屬性繫節-->
      <p v-bind:data-id="id">ID：{{ id }}</p>
      <p :data-id="id">ID：{{ id }}</p>
      <p :id="id">ID：{{ id }}</p>
      <p :id>ID：{{ id }}</p>
      <a :href="homeUrl">ispan</a>
      <!--<img src="/public/dog1.jpg" />--><!--不建議這樣寫-->
      <!--public 資料夾中檔案的讀取，不用加上public資料夾-->
      <img src="/dogs/dog1.jpg" />
      <img src="/src/assets/cat1.jpg" />
      <button :disabled="isDisabled">click</button>
    </div>
</template>

<style scoped>

</style>
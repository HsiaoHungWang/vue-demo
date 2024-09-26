<!-- Options API-->
<!-- <script>
    export default{
        data(){
            return {message: 'Hello Options Api'}
        }
    }
</script> -->

<!-- <script>
import { ref } from 'vue';

    export default{
        setup(){
           const message = ref("Composition API")
           return{message}
        }
    }
</script> -->

<script setup>
import { ref } from 'vue';
const message = ref("Composition API")
</script>

<template>
    <div>
      <h2>My Second Component</h2>
      <p>Options API vs Composition API</p>
      <input type="text" v-model="message" />
      <p>{{ message }}</p>
    </div>
</template>

<style lang="css" scoped>
  h2{
    color:blue
  }
</style>
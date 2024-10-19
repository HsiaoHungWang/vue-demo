<script setup>
import { ref } from 'vue';

    const newTodo = ref('')

    //宣告父組件傳入事件名稱
    const emit = defineEmits(['addTodo'])

    //清除輸入的資料
    const deleteHandler = () => {
        newTodo.value = ''
    }

    const enterHandler = () =>{
   
        //新增工作項目傳給父組件
       //觸發父組件的事件
       emit('addTodo', newTodo.value)
     newTodo.value = ''

       
    }
</script>

<template>
    <div>
        <input v-model="newTodo" @keyup.delete="deleteHandler" @keyup.enter="enterHandler" type="text" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
    </div>
</template>

<style lang="css" scoped>

</style>
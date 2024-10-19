<script setup>
//  宣告父組件傳進來的屬性
    const props = defineProps({
        message: String,
        title: String
    })
    //宣告父組件傳進來的事件
     const emit = defineEmits(["myEvent"])

     const clickHandler = () =>{
        //觸發父組件的自訂事件
        //並將資料傳給父組件
        emit("myEvent", "來自子組件的資料")
     }
    
</script>

<template>
    <div>
    <h2>子組件</h2>
    <p :title="title">{{ message }} {{ title }}</p>
    <button @click="clickHandler">click</button>
    </div>
   
</template>

<style lang="css" scoped>
div{
    width:400px;
    height:300px;
    background-color: silver;
}
</style>
<template>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <h3>會員註冊</h3>
            <form id="registerForm" novalidate @submit.prevent="validate">
                <div class="input-group">
                    <label for="account" class="input-group-text">帳號</label>
                    <input type="text" v-model="userData.name" name="user_name" class="form-control" id="account" required autofocus autocomplete="off">
                    <span v-show="!validity.nameRequired" class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3"><small v-if="!validity.nameRequired" class="text-danger">帳號一定要輸入</small></div>
                <div class="input-group">
                    <label for="pwd1" class="input-group-text">密碼</label>
                    <input type="password" v-model="userData.pwd1" class="form-control" id="pwd1" autocomplete="off">
                    <span v-show="!validity.pwdRequired" class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3"><small v-if="!validity.pwdRequired" class="text-danger">密碼一定要輸入</small></div>

                <div class="input-group">
                    <label for="pwd2" class="input-group-text">密碼確認</label>
                    <input type="password" v-model="userData.pwd2" class="form-control" id="pwd2" autocomplete="off">
                    <span class="input-group-text bg-danger text-white hide"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3">
                    <small class="text-danger hide">密碼不一致</small>
                </div>
                <div class="input-group">
                    <label for="email" class="input-group-text">電子郵件</label>
                    <input type="email" v-model="userData.email" class="form-control" id="email">
                    <span v-show="!validity.emailRequired" class="input-group-text bg-danger text-white"><i class="bi bi-x-lg"></i></span>
                </div>
                <div class="mb-3">
                    <small  v-if="!validity.emailRequired" class="text-danger">電子郵件要輸入</small><br>
                    <small class="text-danger">電子郵件格式不正確</small>
                </div>

                <button type="submit" class="btn btn-primary" id="buttonSubmit">送出</button>

            </form>

        </div>
        <div class="col-3">

        </div>
    </div>
</template>

<style></style>
<script setup>
import { ref } from 'vue';

//new Regexp()
const emailRule = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;


const userData = ref({
    "name":"",
    "pwd1":"",
    "pwd2":"",
    "email":""
})

const validity = ref({
  "nameRequired":true,
  "pwdRequired":true,
  "emailRequired":true,
  "pwdConfirm":true,
  "emailFormat":true,
  "isValid" :false
})

const validate = ()=>{

    //資料一定要輸入驗證
    validity.value.nameRequired = userData.value.name.length > 0
    validity.value.pwdRequired = userData.value.pwd1.length > 0
    validity.value.emailRequired = userData.value.email.length > 0

    //密碼跟密碼確認要一致
   validity.value.pwdConfirm = userData.value.pwd1 === userData.value.pwd2

   //Email格式檢查
   validity.value.emailFormat = emailRule.test(userData.value.email)

   validity.value.isValid=validity.value.nameRequired && validity.value.pwdRequired && validity.value.emailRequired && validity.value.pwdConfirm && validity.value.emailFormat

   
  
  if(validity.value.isValid){
    alert('驗證成功')
    //將資料透過Ajax(fetch())送到後端API
    
  }
   
}


</script>
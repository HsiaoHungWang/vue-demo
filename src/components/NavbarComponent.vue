<script setup>
    
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         
          <RouterLink :to="{ name: 'Home' }" class="nav-link" activeClass="active">首頁</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'About' }" class="nav-link" activeClass="active">關於我們</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Abc' }" class="nav-link" activeClass="active">聯絡我們</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'directive' }" class="nav-link" activeClass="active">Directive </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'member', params:{id:'20'} }" class="nav-link"  activeClass="active">會員中心20</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="css" scoped>

</style>
<script setup>

</script>

<template>
    <div>
        <h2>About Page</h2>
        <RouterLink :to="{ name: 'Team1' }" activeClass="active">Team1</RouterLink> |
        <RouterLink :to="{ name: 'Team2' }" activeClass="active">Team2</RouterLink>
        <hr />
        <RouterView></RouterView>
    </div>
</template>

<style lang="css" scoped>
.active {
    background-color: yellow;
}
</style>
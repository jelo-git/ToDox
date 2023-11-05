<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="centered main-box">
        <h1><font-awesome-icon icon="fa-solid fa-list-check"/> ToDox</h1>
        <h3>A free simple todo list for you and your team</h3>
        <RouterLink class="button" to="/signup">Get Started <font-awesome-icon icon="fa-solid fa-feather-pointed"/></RouterLink>
    </div>
</template>
<style scoped>
    h1{
        margin-top: 0;
    }
</style>

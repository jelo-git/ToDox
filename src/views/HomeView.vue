<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <div class="centered main-box">
        <h1><i class="fa-solid fa-list-check"></i> ToDox</h1>
        <h3>A free simple todo list for you and your team</h3>
        <RouterLink class="start-button" to="/signup">Get Started <i class="fa-solid fa-feather-pointed"></i></RouterLink>
    </div>
</template>
<style scoped>
    .start-button{
        background-color: var(--color-action);
        padding: 8px 16px;
        border-radius: 6px;
        font-size: large;
        color: var(--background-color-alternative);
        margin-top: 0.5rem;
    }
    h1{
        margin-top: 0;
    }
</style>

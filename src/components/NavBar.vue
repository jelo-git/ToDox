<script setup>
import { RouterLink } from 'vue-router'
import store from '../services/storeService';
</script>

<template>
    <nav>
        <div class="container">
            <div class="content">
                <font-awesome-icon icon="fa-solid fa-list-check"/>
                <RouterLink to="/" class="link">ToDox</RouterLink>
                <RouterLink v-if="store.getters.isUserLoggedIn" to="/dashboard" class="link">Dashboard</RouterLink>
            </div>
            <div class="account" v-if="store.getters.isUserLoggedIn">
                <img src="../assets/logo.png" alt="avatar" />
            </div>
                <RouterLink v-if="!store.getters.isUserLoggedIn" to="/login" class="button link">Login</RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: var(--navbar-bg);
    padding: 8px 16px;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
.content {
    display: flex;
    justify-content: left;
    align-items: center;
}
.link {
    font-size: larger;
    font-weight: 700;
    margin-left: 12px;
    margin-right: 12px;
    color: var(--navbar-text);
}
.button{
    margin-top: 0;
    font-size: medium;
    margin-left: 0;
}

.account {
    display: flex;
    justify-content: center;
    align-items: center;
}
.account img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}</style>
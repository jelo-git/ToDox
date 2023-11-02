<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <div class="container">
            <div class="content">
                <i class="fa-solid fa-list-check"></i>
                <RouterLink to="/" class="link">ToDox</RouterLink>
            </div>
            <div class="account">
                <img src="../assets/logo.png" alt="avatar" />
            </div>
        </div>
    </nav>
</template>

<style>
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
    color: var(--navbar-text);
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
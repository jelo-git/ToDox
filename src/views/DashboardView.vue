<script setup>
import router from '../router/index.js';
if (!sessionStorage.getItem('username') || !sessionStorage.getItem('token')) {
    router.push('/login');
}
import { ref } from 'vue';

let username = ref(sessionStorage.getItem('username'));
</script>

<template>
    <div class="centered">
        <h1>Dashboard</h1>
        <p>Logged in as {{username}}</p>
        <!--<button v-on:click="logout">Logout</button>-->
    </div>
</template>
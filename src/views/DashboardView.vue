<script setup>
import router from '../router/index.js';
import store from '../services/storeService';
import { ref } from 'vue';

let username = ref(store.getters.user);

var logout = () => {
    store.dispatch('logout');
    router.push('/');
}
</script>

<template>
    <div class="centered">
        <h1>Dashboard</h1>
        <p>Logged in as {{username}}</p>
        <button v-on:click="logout">Logout</button>
    </div>
</template>
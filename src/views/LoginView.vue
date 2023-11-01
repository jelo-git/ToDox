<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios';
var userError = ref(false);
var passError = ref(false);
var username = ref('');
var password = ref('');
var validate = () => {
    userError.value = false;
    if (username.value == '') {
        userError.value = true;
    }
    passError.value = false;
    if (password.value == '') {
        passError.value = true;
    }
    if (userError.value || passError.value) {
        return;
    }

    axios.post('http://localhost/api/login', {
        username: "username.value",
        password: password.value
    }).finally(() => {
        console.log('done');
    });
}
</script>

<template>
    <div class="centered">
        <h1>Login</h1>
        <input v-model="username" v-bind:class="(userError)?'error':''" type="text" placeholder="Username" name="username" required/>
        <input v-model="password" v-bind:class="(passError)?'error':''" type="password" placeholder="Password" name="password" required/>
        <button v-on:click="validate">Login</button>
        <span>Don't have an account? <RouterLink to="/signup">Sign up</RouterLink></span>
    </div>

</template>

<style scoped>
    .centered {
        position: absolute;
        background-color: var(--navbar-bg);
        padding: 32px;
        border-radius: 12px;
        box-shadow: 0 2px 12px var(--background-color-alternative);
        display: flex;
        flex-direction: column;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--background-color-alternative);
    }
    h1 {
        margin: 0;
        margin-bottom: 16px;
        font-size: 32px;
        font-weight: 700;
    }
    input{
        margin: 0.5rem 0;
        border: 1px solid var(--background-color-alternative);
        border-radius: 6px;
        background-color: var(--color-primary);
        color: var(--background-color-alternative);
        padding: 8px 16px;
    }
    input:focus{
        outline: 0;
        border-color: var(--color-action);
    }
    button{
        border: none;
        background-color: var(--color-action);
        padding: 8px 16px;
        border-radius: 6px;
        font-size: large;
        color: var(--background-color-alternative);
        margin-top: 0.5rem;
    }
    span{
        font-size: small;
        opacity: 0.8;
        margin-top: 0.5rem;
    }
    span a{
        font-weight: 700;
    }
    .error{
        border-color: var(--color-error);
    }
</style>
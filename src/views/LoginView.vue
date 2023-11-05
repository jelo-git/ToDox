<script setup>
import router from '../router/index.js';
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import loginService from '../services/loginService';
let login = new loginService();

let userError = ref(false);
let passError = ref(false);
let loginError = ref(false);
let username = ref('');
let password = ref('');

let validate = () => {
    login.username = username.value;
    userError.value = login.userError;
    login.password = password.value;
    passError.value = login.passError;
    if(login.validate()){
        login.login().then((res) => {
            if (res.status != 200) {
                loginError.value = true;
            } else {
                router.push('/dashboard');
            }
        });
    }
}
</script>

<template>
    <div class="centered main-box">
        <h1>Login</h1>
        <span v-if="loginError" class="error-txt">Invalid username or password</span>
        <input v-on:keyup.enter="validate" v-model="username" v-bind:class="(userError)?'error':''" type="text" placeholder="Username" name="username" required/>
        <input v-on:keyup.enter="validate" v-model="password" v-bind:class="(passError)?'error':''" type="password" placeholder="Password" name="password" required/>
        <button v-on:click="validate">Login</button>
        <span>Don't have an account? <RouterLink to="/signup">Sign up</RouterLink></span>
    </div>

</template>

<style src="../assets/authentication.css" scoped>
</style>
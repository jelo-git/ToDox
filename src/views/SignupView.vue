<script setup>
import router from "../router/index.js";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import signupService from "../services/signupService";
let signup = new signupService();

let userError = ref(false);
let emailError = ref(false);
let passError = ref(false);
let repassError = ref(false);
let loginError = ref(false);

let username = ref("");
let email = ref("");
let password = ref("");
let repassword = ref("");

let validate = () => {
  signup.username = username.value;
  userError.value = signup.userError;
  signup.password = password.value;
  passError.value = signup.passError;
  signup.email = email.value;
  emailError.value = signup.emailError;
  signup.repassword = repassword.value;
  repassError.value = signup.repassError;
  if (signup.validate()) {
    signup.signup().then((res) => {
      if (res.status != 201 && res.status != 200) {
        loginError.value = true;
      } else {
        router.push("/dashboard");
      }
    });
  }
};
</script>

<template>
  <div class="centered main-box">
    <h1>Sign up</h1>
    <span v-if="loginError" class="error-txt">Invalid username or email</span>
    <input v-on:keyup.enter="validate" v-model="username" v-bind:class="userError ? 'error' : ''" type="text" placeholder="Username" name="username" required />
    <input v-on:keyup.enter="validate" v-model="email" v-bind:class="emailError ? 'error' : ''" type="text" placeholder="Email" name="email" required />
    <input v-on:keyup.enter="validate" v-model="password" v-bind:class="passError ? 'error' : ''" type="password" placeholder="Password" name="password" required />
    <input v-on:keyup.enter="validate" v-model="repassword" v-bind:class="repassError ? 'error' : ''" type="password" placeholder="Repeat password" name="repassword" required />
    <button v-on:click="validate">Sign up</button>
    <span>Already have an account? <RouterLink to="/login">Login</RouterLink></span>
  </div>
</template>

<style src="../assets/authentication.css" scoped></style>

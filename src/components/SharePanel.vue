<script setup>
import { ref } from "vue";
import EditToDoService from "../services/editToDoService";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
let editToDo = new EditToDoService(props.todo);

let user = ref("");
let err = ref(false);

let submit = () => {
  if (Number(user.value) == NaN) {
    err.value = true;
    return;
  }
  if (Number(user.value) < 0) {
    err.value = true;
    return;
  }
  if (!Number.isInteger(Number(user.value))) {
    err.value = true;
    return;
  }
  err.value = false;
  editToDo.users.push(parseInt(Number(user.value)));
  editToDo.update().then((res) => {
    console.log(res);
    if (res.status != 200) {
      alert("There was an error");
    } else {
      alert("ToDo shared");
    }
  });
};
</script>

<template>
  <div class="main-box">
    <h1>Share with user</h1>
    <span v-if="err" class="error-txt">Invalid user</span>
    <input v-model="user" v-bind:class="err ? 'error' : ''" type="number" placeholder="Users id (after #)" name="user" required />
    <button v-on:click="submit">Share</button>
  </div>
</template>

<style src="../assets/authentication.css" scoped></style>

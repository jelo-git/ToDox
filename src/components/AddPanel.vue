<script setup>
import { ref } from "vue";
import addToDoService from "../services/addToDoService";

let addToDo = new addToDoService();

let title = ref("");
let description = ref("");
let dueDate = ref("");
let titleError = ref(false);
let dueDateError = ref(false);

let submit = () => {
  addToDo.title = title.value;
  titleError.value = addToDo.titleError;
  addToDo.description = description.value;
  addToDo.dueDate = dueDate.value;
  dueDateError.value = addToDo.dueDateError;
  if (addToDo.validate()) {
    addToDo.submit().then((res) => {
      if (res.status != 201) {
        alert("There was an error");
      } else {
        alert("ToDo added");
      }
    });
  }
};
</script>

<template>
  <div class="main-box">
    <h1>Add new ToDo</h1>
    <span v-if="titleError" class="error-txt">Invalid title</span>
    <input v-model="title" v-bind:class="titleError ? 'error' : ''" type="text" placeholder="Title" name="title" required />
    <textarea v-model="description" type="textarea" placeholder="Description" name="description" />
    <span v-if="dueDateError" class="error-txt">Invalid due date</span>
    <input v-model="dueDate" v-bind:class="dueDateError ? 'error' : ''" type="datetime-local" placeholder="Due date" name="dueDate" required />
    <button v-on:click="submit">Add</button>
  </div>
</template>

<style src="../assets/authentication.css" scoped></style>

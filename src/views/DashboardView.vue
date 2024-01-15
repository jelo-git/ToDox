<script setup>
import router from "../router/index.js";
import store from "../services/storeService";
import DashboardService from "../services/dashboardService";
import EditToDoService from "../services/editToDoService";
import AddPanel from "../components/AddPanel.vue";
import EditPanel from "../components/EditPanel.vue";
import SharePanel from "../components/SharePanel.vue";
import { ref } from "vue";

let todoRender = ref(false);
let addPanelRender = ref(false);
let editPanelRender = ref(false);
let sharePanelRender = ref(false);
let todos = ref([]);
let passed = ref({});

let getRecentTodos = async () => {
  let dashboard = new DashboardService();
  todoRender.value = false;
  let fetchedTodos = await dashboard.fetcher();
  fetchedTodos.forEach((todo) => {
    todo.late = new Date(todo.dueDate) < new Date();
  });
  todos.value = fetchedTodos.sort((a, b) => {
    if (a.finished !== b.finished) {
      return a.finished ? 1 : -1;
    }
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
  todoRender.value = true;
};
getRecentTodos();

let addNewTodo = () => {
  addPanelRender.value = true;
};
let exit = () => {
  addPanelRender.value = false;
  editPanelRender.value = false;
  sharePanelRender.value = false;
  getRecentTodos();
};

let formatISODate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
};

let formatUsers = (users) => {
  let userString = "";
  users.forEach((user) => {
    userString += user + ", ";
  });
  return userString.slice(0, -2);
};

let changeFinishStatus = (todo) => {
  let editor = new EditToDoService(todo);
  editor.finished = !editor.finished;
  editor.update().then((res) => {
    if (res.status != 200) {
      alert("There was an error");
    } else {
      getRecentTodos();
    }
  });
};

let editToDo = (todo) => {
  passed.value = todo;
  editPanelRender.value = true;
};

let addUser = (todo) => {
  passed.value = todo;
  sharePanelRender.value = true;
};
</script>

<template>
  <div class="tooltip">
    <button class="button" v-on:click="getRecentTodos"><font-awesome-icon icon="fa-solid fa-arrows-rotate" /></button>
    <button class="button" v-on:click="addNewTodo"><font-awesome-icon icon="fa-solid fa-plus" /></button>
  </div>
  <div class="prio" v-if:="addPanelRender || editPanelRender || sharePanelRender" v-on:click="exit">
    <AddPanel v-if:="addPanelRender" class="centered" @click.stop />
    <EditPanel v-if:="editPanelRender" :todo="passed" class="centered" @click.stop />
    <SharePanel v-if:="sharePanelRender" :todo="passed" class="centered" @click.stop />
  </div>
  <div class="container" v-if="todoRender">
    <div v-for="todo in todos" :key="todo.id" class="card" v-bind:class="[todo.late ? 'late' : '', todo.finished ? 'done' : '']">
      <h1>{{ todo.title }}</h1>
      <p class="description">{{ todo.description }}</p>
      <div class="footer">
        <div class="spans">
          <span>Owners: {{ formatUsers(todo.usersId) }}</span>
          <span>{{ formatISODate(todo.dueDate) }}</span>
        </div>
        <div>
          <button class="button" v-on:click="addUser(todo)"><font-awesome-icon icon="fa-solid fa-share-nodes" /></button>
          <button class="button" v-on:click="editToDo(todo)"><font-awesome-icon icon="fa-solid fa-pen-to-square" /></button>
          <button class="button" v-on:click="changeFinishStatus(todo)"><font-awesome-icon v-if:="!todo.finished" icon="fa-solid fa-check" /><font-awesome-icon v-if:="todo.finished" icon="fa-solid fa-xmark" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../assets/dashboard.css" scoped></style>

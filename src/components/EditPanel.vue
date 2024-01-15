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

let localTitle = ref(props.todo.title);
let localDescription = ref(props.todo.description);
let localDueDate = ref(new Date(props.todo.dueDate).toISOString().slice(0, -1));

let titleError = ref(false);
let dueDateError = ref(false);

let submit = () => {
  editToDo.title = localTitle.value;
  titleError.value = editToDo.titleError;
  editToDo.description = localDescription.value;
  editToDo.dueDate = localDueDate.value;
  dueDateError.value = editToDo.dueDateError;
  if (editToDo.validate()) {
    editToDo.update().then((res) => {
      if (res.status != 201) {
        alert("There was an error");
      } else {
        alert("ToDo updated");
      }
    });
  }
  dueDateError.value = editToDo.dueDateError;
  titleError.value = editToDo.titleError;
};

let deleteToDo = () => {
  editToDo.delete().then((res) => {
    if (res.status != 200) {
      alert("There was an error");
    } else {
      alert("ToDo deleted");
    }
  });
};
</script>

<template>
  <div class="main-box">
    <h1>Edit ToDo</h1>
    <span v-if="titleError" class="error-txt">Invalid title</span>
    <input v-model="localTitle" v-bind:class="titleError ? 'error' : ''" type="text" placeholder="Title" name="title" required />
    <textarea v-model="localDescription" type="textarea" placeholder="Description" name="description" />
    <span v-if="dueDateError" class="error-txt">Invalid due date</span>
    <input v-model="localDueDate" v-bind:class="dueDateError ? 'error' : ''" type="datetime-local" placeholder="Due date" name="dueDate" required />
    <div>
      <button v-on:click="submit"><font-awesome-icon icon="fa-solid fa-plus" /></button>
      <button class="delete" v-on:click="deleteToDo"><font-awesome-icon icon="fa-solid fa-trash" /></button>
    </div>
  </div>
</template>

<style src="../assets/authentication.css" scoped></style>
<style scoped>
.delete {
  background-color: var(--color-error);
}
</style>

import axios from 'axios';
import store from './storeService';
import ToDoService from './todoService';

const UPDATE_API_BASE_URL = "http://localhost:8080/api/users/";
const UPDATE_API_BASE_URL2 = "/todos/";

class EditToDoService extends ToDoService {
    constructor(todo) {
        super();
        console.log('addToDoService constructor');
        this.title = todo.title;
        this.description = todo.description;
        this.dueDate = todo.dueDate;
        this.finished = todo.finished;
        this.users = todo.usersId;
        this.#UPDATE_URL += todo.id;
        this.id = todo.id;
    }
    //private
    #UPDATE_URL = UPDATE_API_BASE_URL + store.getters.id + UPDATE_API_BASE_URL2;
    #titleError = false;
    #dueDateError = false;
    //methods
    #validateTitle() {
        this.#titleError = false;
        if (this.title == '') {
            this.#titleError = true;
        }
    }
    #validateDueDate() {
        this.#dueDateError = false;
        if (this.dueDate == '') {
            this.#dueDateError = true;
        }
    }
    //public
    get titleError() { return this.#titleError; }
    get dueDateError() { return this.#dueDateError; }
    //methods
    validate() {
        this.#validateDueDate();
        this.#validateTitle();
        return !(this.#titleError || this.#dueDateError);
    }
    //methods
    update() {
        console.log("update");
        return axios.put(this.#UPDATE_URL, { id: this.id, title: this.title, description: this.description, finished: this.finished, dueDate: this.dueDate , usersId: this.users }, { withCredentials: true }).then(response => {
            console.log(response);
            return response
        }).catch(error => { return error.response });
    }
}

export default EditToDoService;
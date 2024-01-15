import axios from 'axios';
import store from './storeService';
import ToDoService from './todoService';

const CREATE_API_BASE_URL = "http://localhost:8080/api/users/";
const CREATE_API_BASE_URL2 = "/todos";

class AddToDoService extends ToDoService {
    constructor() {
        super();
        console.log('addToDoService constructor');
    }
    //private
    #CREATE_URL = CREATE_API_BASE_URL + store.getters.id + CREATE_API_BASE_URL2;
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
    submit() {
        return axios.post(this.#CREATE_URL, { title: this.title, description: this.description, dueDate: this.dueDate }, { withCredentials: true }).then(response => {
            return response
        }).catch(error => { return error.response });
    }
}

export default AddToDoService;
import axios from 'axios';
import router from "../router/index.js";
import store from './storeService';

let FETCH_API_BASE_URL = 'http://localhost:8080/api/users/';
let FETCH_API_BASE_URL2 = '/todos';

class DashboardService {
    constructor() {
        console.log('Dashboard constructor');
        this.#todos = [];
    }
    //private
    #API_BASE_URL = FETCH_API_BASE_URL + store.getters.id + FETCH_API_BASE_URL2;
    #todos = [];
    //methods
    #fetchTodos() {
        return axios.get(this.#API_BASE_URL, { withCredentials: true }).then(response => {
            if (response.status == 200) {
                response.data.forEach(element => {
                    this.#todos.push(element)
                });
            } else {
                store.dispatch('logout');
                router.push("/login");
            }
            return response;
        }).catch(error => { return error.response });
    }
    //public
    get todos() { return this.#todos; }
    //methods
    async fetcher() {
        this.#todos = [];
        await this.#fetchTodos();
        return this.#todos;
    }
}

export default DashboardService;
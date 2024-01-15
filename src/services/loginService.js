import axios from 'axios';
import store from './storeService';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/auth/login";

class LoginService {
    constructor() {
        console.log('LoginService constructor');
    }
    //private
    #username = '';
    #password = '';
    #userError = false;
    #passError = false;
    //methods
    #validateUsername() {
        this.#userError = false;
        if (this.#username == '') {
            this.#userError = true;
        }
    }
    #validatePassword() {
        this.#passError = false;
        if (this.#password == '') {
            this.#passError = true;
        }
    }
    //public
    get username() { return this.#username; }
    set username(value) { this.#username = value.trim(); this.#validateUsername(); }
    get password() { return this.#password; }
    set password(value) { this.#password = value.trim(); this.#validatePassword(); }
    get userError() { return this.#userError; }
    get passError() { return this.#passError; }
    //methods
    validate() {
        this.#validateUsername();
        this.#validatePassword();
        return !(this.#userError || this.#passError);
    }
    login() {
        return axios.post(LOGIN_API_BASE_URL, { username: this.#username, password: this.#password }, { withCredentials: true }).then(response => {
            if (response.status == 200) {
                store.dispatch('login', { user: response.data.username, roles: response.data.roles, id: response.data.id });
            }
            return response
        }).catch(error => { return error.response });
    }
}

export default LoginService;
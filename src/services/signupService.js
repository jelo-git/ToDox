import LoginService from './loginService'
import store from './storeService'
import axios from 'axios';

const SIGNUP_API_BASE_URL = "http://localhost:8080/api/auth/register";

class SignupService extends LoginService {
    constructor() {
        super();
        console.log('SignupService constructor');
    }
    //private
    #email = '';
    #repassword = '';
    #emailError = false;
    #repassError = false;
    //methods
    #validateEmail() {
        this.#emailError = false;
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.#email == '' || !emailregex.test(this.#email)) {
            this.#emailError = true;
        }
    }
    #validateRetypedPassword() {
        this.#repassError = false;
        if (this.#repassword == '' || this.#repassword != this.password) {
            this.#repassError = true;
        }
    }
    //public
    get email() { return this.#email; }
    set email(value) { this.#email = value.trim(); this.#validateEmail(); }
    get repassword() { return this.#repassword; }
    set repassword(value) { this.#repassword = value.trim(); this.#validateRetypedPassword(); }
    get emailError() { return this.#emailError; }
    get repassError() { return this.#repassError; }
    //methods
    validate() {
        return super.validate() && !(this.#emailError || this.#repassError);
    }
    signup() {
        return axios.post(SIGNUP_API_BASE_URL, { username: this.username, password: this.password, email: this.#email }).then(response => {
            if (response.status != 201)
                throw response;
        }).then(_ => {
            return super.login();
        }).catch(error => { return error.response });
    }
}

export default SignupService;
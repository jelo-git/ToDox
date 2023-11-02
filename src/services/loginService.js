import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost/api/login";

class LoginService {
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
    #saveSession(username, token) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', token);
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
        return axios.post(LOGIN_API_BASE_URL, { username: this.#username, password: this.#password }).then(response => {
            if (response.data.success) {
                this.#saveSession(response.data.username, response.data.token);
            }
            return response
        });
    }

}

export default new LoginService();
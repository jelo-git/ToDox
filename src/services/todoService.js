class ToDoService {
    constructor() {
        console.log('todoService constructor');
    }
    //private
    #title = '';
    #description = '';
    #dueDate = '';
    #finished = false;
    #users = [];
    //methods

    //public
    get title() { return this.#title; }
    set title(value) { this.#title = value.trim(); }
    get description() { return this.#description; }
    set description(value) { this.#description = value; }
    get dueDate() { return this.#dueDate; }
    set dueDate(value) { this.#dueDate = value.trim(); }
    get finished() { return this.#finished; }
    set finished(value) { this.#finished = !!value; }
    get users() { return this.#users; }
    set users(value) {
        if (Array.isArray(value))
            this.#users = value;
        else
            this.#users = [value];
    }
    //methods


}

export default ToDoService;
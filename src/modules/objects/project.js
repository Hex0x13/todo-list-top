class Project {
    constructor(name) {
        this.tasks = {};
        this.name = name;
    }

    get(key) {
        return this.tasks[key];
    }

    set(key, updatedTask) {
        this.tasks = Object.assign(this.tasks[key], updatedTask);
    }

    add(task) {
        this.tasks[task.id] = task;
    }

    addList(list) {
        for (const elem of list) {
            this.tasks[elem.id] = elem;
        }
    }

    getAll() {
        return Object.values(this.tasks);
    }

    remove(key) {
        delete this.tasks[key];
    }
}

export default Project;
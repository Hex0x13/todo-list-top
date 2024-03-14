export default class Project {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(id) {
        this.tasks.forEach((task, index) => {
            if (task.id == id) {
                this.tasks.splice(index, 1);
            }
        });
    }

    editTask(id, updatedTask) {
        this.tasks.forEach((task, index) => {
            if (task.id == id) {
                this.tasks[index] = updatedTask;
            }
        });
    }

    getTasks() {
        return this.tasks;
    }
}
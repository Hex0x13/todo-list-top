export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTaskList(tasks) {
        this.tasks.push(...tasks);
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

    getAllTask() {
        return this.tasks;
    }
}

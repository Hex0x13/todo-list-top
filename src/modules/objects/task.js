class Task {

    constructor(taskObj) {
        this.setValue(taskObj);
    }

    setValue(taskObj) {
        this.id = taskObj.id;
        this.title = taskObj.title;
        this.description = taskObj.description;
        this.due_date = taskObj.due_date;
        this.priority = taskObj.priority;
        this.done = taskObj.done;
        this.project_name = taskObj.project_name;
    }
}

export default Task;
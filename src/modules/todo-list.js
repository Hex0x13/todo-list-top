import projectManager from "./objects/project-manager";
import Project from "./objects/project";
import Task from "./objects/task";
import { autoIncrement } from "./functions";

const ungroupTask = new Project('ungroup');

ungroupTask.addList([
    new Task({
        id: autoIncrement(),
        title: 'Go to beach',
        description: 'Just relax',
        due_date: new Date('2024-03-16'),
        priority: 'low',
        done: false
    }),
    new Task({
        id: autoIncrement(),
        title: 'Study',
        description: 'for my science exam',
        due_date: new Date('2024-03-22'),
        priority: 'high',
        done: false
    }),
    new Task({
        id: autoIncrement(),
        title: 'buy a coffee',
        description: '',
        due_date: new Date('2024-03-15'),
        priority: 'medium',
        done: false
    })
]);


projectManager.addProject(ungroupTask.name, ungroupTask)
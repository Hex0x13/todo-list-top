class ProjectManager {
    constructor(projects) {
        if (ProjectManager.instance) {
            return ProjectManager.instance;
        }

        if (projects) {
            this.projects = projects;
        } else {
            this.projects = {};
        }

        ProjectManager.instance = this;
    }

    addProject(key, project) {
        this.projects[key] = project;
    }

    addTaskInProject(project, newtask) {
        this.projects[project].add(newtask);
    }

    getProject(key) {
        return this.projects[key];
    }

    getProjectTasks(key) {
        return Object.values(this.projects[key].tasks);
    }

    getAllProject() {
        return Object.values(this.projects);
    }

    getAllTask() {
        return Object.values(this.projects).flatMap(
            project => Object.values(project.tasks)
        );
    }

    removeProject(key) {
        delete this.projects[key];
    }
}

export default new ProjectManager();
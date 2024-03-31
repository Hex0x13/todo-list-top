const ProjectList = (() => {
    let instance;

    function createInstance() {
        let list = {};

        function add(key, value) {
            list[key] = value;
        }

        function remove(key) {
            delete list[key];
        }

        function get(key) {
            return list[key];
        }

        function getAll() {
            return Object.values(list);
        }

        return { add, remove, get, getAll };
    }

    function getInstance() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }

    return { getInstance };
})();

export default ProjectList;
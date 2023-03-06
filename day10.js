function createTaskPlanner() {
    // Tu código aquí 👈
    let tasks = [];
    const addTask = (task) => tasks.push({...task, completed: false});
    const removeTask = (value) => {
        const index = tasks.findIndex((item) => item.id === value || item.name === value)
        tasks.splice(index, 1)
    };
    const getTasks = () => tasks;
    const getPendingTasks = () => tasks.filter((item) => !item.completed);
    const getCompletedTasks = () => tasks.filter((item) => item.completed);
    const markTaskAsCompleted = (value) => {
        const index = tasks.findIndex((item) => item.id === value || item.name === value)
        tasks[index].completed = true;
    };
    const getSortedTasksByPriority = () => {
        const result = [...tasks];
        function compare_priority( a, b ) {
            if ( a.priority < b.priority) return -1;
            if ( a.priority > b.priority) return 1;
            return 0;
        }
        return result.sort(compare_priority)
    };
    const filterTasksByTag = (value) => tasks.filter((item) => item.tags.includes(value))//.filter((tag) => tag === value));
    const updateTask = (taskId, updates) => {
        const index = tasks.findIndex((item) => item.id === taskId)
        tasks[index] = { ...tasks[index], ...updates}
    };
    return {
        addTask,
        removeTask,
        getTasks,
        getPendingTasks,
        getCompletedTasks,
        markTaskAsCompleted,
        getSortedTasksByPriority,
        filterTasksByTag,
        updateTask
    }
}
  
const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 2,
    tags: ["personal"]
});
// planner.markTaskAsCompleted('Comprar leche');

console.log(planner.filterTasksByTag('personal'));


// planner.markTaskAsCompleted("Llamar a Juan")
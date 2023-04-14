function taskManager() {
  // Tu código aquí 👈

  let tasks = new Map();
  const addTask = (task, tags) => {
    const taskLowerCase = task.toLowerCase();
    const existTask = tasks.has(taskLowerCase);
    if(existTask){
      tasks.get(taskLowerCase)
      tags.forEach(item => tasks.get(taskLowerCase).add(item));
    }else{
      tasks.set(taskLowerCase, new Set(tags));
    }
  }; 
  const printTasks = ()  => tasks;
  
  return {
    addTask, 
    printTasks
  }
}

/*
const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Sacar al perro", ["mascotas", "urgente"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);*/
const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
myTaskManager.addTask("Comprar leche", ["lácteos"]);

console.log(myTaskManager.printTasks());
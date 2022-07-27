const taskDB = [{
    id: 1,
    name: "",
    description: ""
},
{
    id: 2,
    name: "Barrer",
    description: "Barrer la sala"
},
];

const getAllTask = () => {
    return taskDB
}

const getTaskById = (id) => {
    const filteredDB = taskDB.filter((task) => task.id === id)
    return filteredDB[0]
}

const createTask = (taskObj) => {
    if (taskDB.length === 0) {
        const newTask = {
            id: 1,
            name: taskObj.name,
            description: taskObj.description
        }
        taskDB.push(newTask)
        return newTask
    } else {
        const newTask = {
            id: taskDB[taskDB.length - 1].id + 1,
            name: taskObj.name,
            description: taskObj.description
        }
        taskDB.push(newTask)
        return newTask
    }
}

const deleteTask = (id) => {
    const index = taskDB.findIndex((task) => task.id === id)
    if (index !== -1) {
        taskDB.splice(index, 1)
        return true
    }
    return false
}

const updateTask = (id, data) => {
    const index = taskDB.findIndex(task => task.id === id)
    if (index !== -1) {
        taskDB[index] = data
        return taskDB[index]
    }else{
        createTask(data)
        return taskDB.at(-1)
    }
}

module.exports = {
    getAllTask,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
}
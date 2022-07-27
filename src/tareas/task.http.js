const { getAllTask, getTaskById, createTask, deleteTask, updateTask } = require('./task.controller')



//?Servimos la peticion que requiere todos los usuarios
//? Aqui unicamente les pasamos el request y el response
const getAll = (req, res) => {
    const data = getAllTask()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if (id){
        const data = getTaskById(id)
        if (data.id){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: 'Invalid Id'})
        }
    }else{
        res.status(400).json({message: 'Id is not a number'})
    }
}

const createNewTask = (req, res) =>{
    const data = req.body
    if(data.name && data.description){
        const response = createTask(data)
        res.status(201).json(response)
    }else{
        res.status(400).json({message: 'Invalid Arguments'})
    }
}

const deleteById = (req, res) =>{
    const id = Number(req.params.id)
    if(typeof id === 'number'){
        const deleted = deleteTask(id)
        if (deleted){
            res.status(204).json()
        }else{
            res.status(400).json({message: 'Try with another ID'})
        }
    }else{
        res.status(400).json({message: 'Invalid ID'})
    }
}


const updateNewTask = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if(data.name && data.description){
        const response = updateTask(id, data)
        res.status(201).json(response)
    }else{
        res.status(400).json({message: 'Invalid Arguments'})
    }
}

module.exports = {
    getAll,
    getById,
    createNewTask,
    deleteById,
    updateNewTask
}
const express = require('express');
const taskRouter = require('./tareas/task.routes').router
const app = express();

app.use(express.json())

app.use('/api/v1', taskRouter)


app.listen(8000, () => {
    console.log("Server started at port 8000")
})


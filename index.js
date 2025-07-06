const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/',(req,res)=>{
    // return res.send("<h1> App is running </h1>")
    return res.json({
        data: [],
        message:'Data retrieved',
        status: 200
        // 500, 400, 401, 403, 200,201
    });
});

const TASKS = [
    {id: 1, title: "Task123123123 1", status: 'todo', createdAt: '2025-6-1'},
    {id: 2, title: "Task 2", status: 'todo', createdAt: '2025-6-2'},
    {id: 3, title: "Task 3", status: 'todo', createdAt: '2025-6-3'},
    {id: 4, title: "Task 4", status: 'todo', createdAt: '2025-6-4'},
    {id: 5, title: "Task 5", status: 'todo', createdAt: '2025-6-5'},
    {id: 6, title: "Task 6", status: 'todo', createdAt: '2025-6-6'},
    {id: 7, title: "Task 7", status: 'todo', createdAt: '2025-6-7'},
    {id: 8, title: "Task 8", status: 'todo', createdAt: '2025-6-8'},
    {id: 9, title: "Task 9", status: 'todo', createdAt: '2025-6-9'},
    {id: 10, title: "Task 10", status: 'todo', createdAt: '2025-6-10'},

];

app.get('/task',(req, res)=>{
    // return res.send("<h1> App is running </h1>")
    return res.json({
        data: TASKS,
        message:'Data retrieved',
        status: 200
        // 500, 400, 401, 403, 200,201
    });
});

app.get('/task/:id',(req, res)=>{
    const task =TASKS.find(v=> v.id === +req.params.id);

    if(task){
    return res.json({
        data: TASKS.find(v=> v.id === +req.params.id),
        message:'Data retrieved',
        status: 200
    });
    }else{
        return res.json({
            message:'Data not found',
            status: 420
        })
    }
});

app.listen(PORT, ()=>{
    console.log('App is runnning in port ' + PORT);
});
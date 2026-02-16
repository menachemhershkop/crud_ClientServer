import express from 'express';
import cors from 'cors';

const app= express();
app.use(express.json());
app.use(cors());
let data = [
    {
        id:1,
        title:'abcde',
        isDone: false
    },
    {
        id:2,
        title:'abcde',
        isDone: false
    },
    {
        id:3,
        title:'abcde',
        isDone: true
    },
    {
        id:4,
        title:'abcde',
        isDone: false
    }
]

app.get('/',(req,res)=>{

    res.json({msg:'Wellcome'})
})

app.get('/getalltasks',(req,res)=>{
    console.log(1);
    
        res.json({msg:data})
})

app.post('/addtask', (req,res)=>{
    const {id, title, isDone} =req.body
    console.log(id, title);
    data.push({id, title, isDone})
    res.json({data:data})
    
})

app.put('/edittask/:id', (req,res)=>{
    const {id} = req.params;
    const {title, isDone} = req.body;
    console.log(id, title, isDone);
    const editTask = data.find(e=>e.id==id);
    editTask.title = title;
    editTask.isDone = isDone;
    res.json({msg:editTask})
    
    
})

app.delete('/deletetask/:id', (req,res)=>{
    const {id} = req.params;
    console.log(id);
    const newTasks = data.fill((e)=> e.id!=id);
    data = newTasks;
    res.json({data:data})
    
})












app.listen(8080, ()=>{
    console.log('server run...');
    
})
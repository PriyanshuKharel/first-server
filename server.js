const express = require("express");

const app = express();

app.use(express.json());

const port=8081;

const todoList = ["Need to learn" , "Need to code"];

//http://localhost:8081/todos

app.get("/todos",(req,res) => {
    res.status(200).send(todoList);
});

app.post("/todos",(req,res) => {
    let newTodoitem = req.body.item;
    todoList.push(newTodoitem);
    res.status(201).send({
        message:"The to do got added succesfully"
    });
});

app.delete("/todos",(req,res) => {
    let deltodo = req.body.item;
    todoList.find((element,index)=> {
        if(element===deltodo)
        {
            todoList.splice(index,1);
        }
    });
    res.status(202).send({
        message:`Deleted item -${deltodo}`,
    });
});

app.all("/todos",(req,res) => {
    res.status(501).send({
        message:"These methods are not defined"
    })
});

app.all("*",(req,res) => {
    res.status(404),send();
});

app.listen(port,() => {
    console.log(`Node js server started on ${port}`);
})
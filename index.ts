#! /usr/bin/env node
import inquirer from "inquirer";
let toDos : string[] = [];
let condition = true;
while(condition){
let ans = await inquirer.prompt(
    [
        {
            name: "select",
            type: "list",
            message: "Select an Operation",
            choices: ["Add", "Update", "View", "Delete","Exit"],
        }
    
    ]

);
if( ans.select === "Add"){
    let addTodo = await inquirer.prompt
(
    [
    
        {
           name: "todo",
           type: "input",
           message: "Add Items in the List!!!",
           validate: function (input) {
            if (input.trim() == "") {
                return "Please Enter a Non-Empty item,"
            }
            return true;
           }
        }
    ]
    
)
if (addTodo.todo.trim() !== ""){
toDos.push(addTodo.todo);
toDos.forEach(todo => console.log(todo))
}
}
if( ans.select === "Update"){
    let updateTodo = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "list",
                message: "Update Items in the list!!!",
                choices: toDos.map(item => item)
            }
        ]
    )
    let addTodo = await inquirer.prompt
(
    [
    
        {
           name: "todo",
           type: "input",
           message: "Add Items in the List!!!",
        }
    ]
    
)
let newTodo = toDos.filter(val => val !== updateTodo.todo);
toDos = [...newTodo,addTodo.todo];
toDos.forEach(todo => console.log(todo))
}
if( ans.select === "View"){
    console.log("****TO-DO-LIST****");
    toDos.forEach(todo => console.log(todo))
}
if( ans.select === "Delete"){
    let deleteTodo = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "list",
                message: "Select Item to delete!!!",
                choices: toDos.map(item => item)
            }
        ]
    )
    let newTodo = toDos.filter(val => val !== deleteTodo.todo);
toDos = [...newTodo];
toDos.forEach(todo => console.log(todo))
}


if( ans.select === "Exit"){
    console.log("Exiting Program...");
    condition = false ;
}

}
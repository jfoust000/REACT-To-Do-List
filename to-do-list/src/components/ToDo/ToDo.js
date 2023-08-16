import React from "react";
import './toDo.css';
import Header from '../Header/Header.js';
import ToDoForm from "./ToDoForm.js";

//actions like delete, edit, add, and complete

function ToDo () {

return (
    
    <div>
        <Header/>
        <h2>To-Do List</h2>
        <div className="to-do-container">
        <ToDoForm/>
        </div>
        
    </div>
   

);

}

export default ToDo;
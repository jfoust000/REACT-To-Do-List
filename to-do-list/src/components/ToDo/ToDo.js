import React from "react";
import './toDo.css';
import Header from '../Header/Header.js';
import ToDoForm from "./ToDoForm.js";

//actions like delete, edit, add, and complete

function ToDo (props) {

return (
    
    <div>
        <Header/>
        <h2>To-Do List</h2>
        <div className="to-do-container">
        <ToDoForm
        toDo={props.toDo}
        setToDo={props.setToDo}
        toDoList={props.toDoList}
        setToDoList={props.setToDoList}
        error={props.error}
        setError={props.setError}
        handleSubmit={props.handleSubmit}
        />
        </div>
        
    </div>
   

);

}

export default ToDo;
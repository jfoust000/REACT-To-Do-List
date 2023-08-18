import React from "react";
import './toDo.css';
import Header from '../Header/Header.js';
import ToDoForm from "./ToDoForm.js";
import Footer from "../Footer/Footer.js";
//actions like delete, edit, add, and complete

function ToDo () {

return (
    
    <div>
        <Header/>
        <div className="App">
        <h2>To-Do List</h2>
        </div>
        <div className="to-do-container">
        <ToDoForm/>
        </div>
        <Footer/>
    </div>
   

);

}

export default ToDo;
import './toDo.css';
import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDoList';

function ToDoForm () {

    const [toDo, setToDo] = useState("");
    const [error, setError] = useState(false);
    const [toDoList, setToDoList] = useState([]);


    const handleSubmit = (e) => {

        e.preventDefault();

        if (toDo.length === 0) {

            setError(true);

        } else {

            console.log(toDo);
            setToDoList([...toDoList, toDo]);
            console.log(toDoList);

        }



    };

    return (
        <div>
            {error && toDo.length <=0 ?
            <p className='to-do-error'>Enter a To-Do</p>
            : ""}
        <div className='to-do-container'>
            <div className='to-do-form-container'>
            <form onSubmit={handleSubmit}>
                <input type='text' className='to-do-input' placeholder='Enter ToDo' onChange={e=>setToDo(e.target.value)}></input>

                <button className='add-to-do-button'>Add</button>
           </form>

           </div>
        </div>
        </div>

    );

}

export default ToDoForm;
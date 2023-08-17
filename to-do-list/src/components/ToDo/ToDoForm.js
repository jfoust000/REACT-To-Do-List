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

            setError(false);

            const newToDo = {

                date: new Date().toLocaleString(),
                completedDate: "",
                toDo: toDo,
                completed: false,

            };

            setToDoList([...toDoList, newToDo]);
            setToDo("");
          
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
                <input type='text' className='to-do-input' onChange={e=>setToDo(e.target.value)} value={toDo}></input>

                <button className='add-to-do-button'>Add</button>
           </form>
            <ToDoList 
            toDoList={toDoList}
            setToDoList={setToDoList}
            />
           </div>
        </div>
        </div>

    );

}

export default ToDoForm;
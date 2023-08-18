import './toDo.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';

function ToDoForm () {

    const [toDo, setToDo] = useState("");

    const [error, setError] = useState(false);
    const [toDoList, setToDoList] = useState(getDataFromStorage());

    function getDataFromStorage () {

        const data = window.localStorage.getItem('REMIND_ME_APP');

        if (data) {

            return JSON.parse(data);

        } else {

            return [];

        }


    }
    
    useEffect(() => {

        window.localStorage.setItem('REMIND_ME_APP', JSON.stringify(toDoList));

    }, [toDoList]);
    
    
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
                <input type='text' autoFocus className='to-do-input' onChange={e=>setToDo(e.target.value)} value={toDo} placeholder='Enter a to-Do'></input>

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
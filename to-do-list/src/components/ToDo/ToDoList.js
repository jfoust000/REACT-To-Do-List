import './toDo.css';
import React from 'react';
import { useState } from 'react';
import Completed from '../Completed/Completed.js';
import { useNavigate } from 'react-router-dom';


function ToDoList (props) {

    const [toDoEdit, setToDoEdit] = useState(null);
    const [toDoEditText, setToDoEditText] = useState("");
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    
    

    function deleteToDo (date) {

        const updatedToDos = [...props.toDoList.filter(toDo => toDo.date !== date)];

        props.setToDoList(updatedToDos);

    }

    function setCompletedStatus (date) {
        
        const updatedToDos = [...props.toDoList].map(toDo => {

            if (toDo.date === date) {
                
                toDo.completed = !toDo.completed;

                if (toDo.completed === true) {
                    
                    setCount(count + 1);
    
                } else if (toDo.completed === false) {
                    
                    if (count > 0) {
    
                        setCount(count - 1);
                        
                    }
    
                }

            }

            return toDo

        })

        props.setToDoList(updatedToDos);

    }

    function editToDo (date) {

        const updatedToDos = [...props.toDoList].map(toDo => {

            if (toDo.date === date) {

                toDo.toDo = toDoEditText

            }

            return toDo;

        })

        props.setToDoList(updatedToDos);
        setToDoEdit(null);
        setToDoEditText("");

    }
    
   

    return (
        
        <div className="to-do-list">
        
            {props.toDoList.map((toDo) => {

                return (
                        
                        
                    <div className='todo-row' key={toDo.date}>
                            
                        <input className='checkbox' type="checkbox" checked={toDo.completed} onChange={() => setCompletedStatus(toDo.date)}></input>

                        {toDoEdit === toDo.date ? 
                        
                            <input id='edit-text-input'type='text' onChange={(e) => setToDoEditText(e.target.value)} value={toDoEditText}></input> 
                        :
                        <span style=

                        {toDo.completed === true ? 
                            
                            {textDecoration: 'line-through'} 
                            : 
                            {textDecoration: 'none'}}>
                            
                            {toDo.toDo}

                        </span>}
                            
                        <div className='list-buttons'>

                            {toDoEdit === toDo.date ?

                                <button id='save-button' onClick={() => editToDo(toDo.date)}>Save</button>
                            :
                                <button id='left-align-button' type="button" className='edit-button' onClick={() => setToDoEdit(toDo.date)}>Edit</button>}
                            
                            <button type="button" className='delete-button' id='right-align-button' onClick={() => deleteToDo(toDo.date)}>Delete</button>

                        </div>
                           
                    </div>
                        
                        
                    );

            })}
            {count > 0 ?
            <button type="button" id='view-completed-to-dos'> Completed</button>
            :
            null}

        </div>

    );

}

export default ToDoList;
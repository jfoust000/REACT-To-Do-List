import './toDo.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ToDoList (props) {

    const [toDoEdit, setToDoEdit] = useState(null);
    const [toDoEditText, setToDoEditText] = useState("");
    const [count, setCount] = useState(getCountFromStorage());
    const [completedToDoList, setCompletedToDoList] = useState(getDataFromStorage());

    const navigate = useNavigate();

    function getDataFromStorage () {

        const data = window.localStorage.getItem('REMIND_ME_APP_COMPLETED');

            if (data) {

                return JSON.parse(data);

            } else {

                return [];

            }


    }

    function getCountFromStorage () {

        const data = window.localStorage.getItem('REMIND_ME_APP_COUNT');

        if (data) {

            return Number(data);

        } else {

            return 0;

        }

    }

    useEffect(() => {

        window.localStorage.setItem('REMIND_ME_APP_COMPLETED', JSON.stringify(completedToDoList));

    }, [completedToDoList]);

    useEffect(() => {

        window.localStorage.setItem('REMIND_ME_APP_COUNT', count);

    }, [count]);

    function deleteToDo (id) {

        const updatedToDos = [...props.toDoList.filter(toDo => toDo.id !== id)];

        props.setToDoList(updatedToDos);

        const updatedCompletedToDos = [...completedToDoList.filter(toDo => toDo.id !== id)];

        setCompletedToDoList(updatedCompletedToDos);

        if (count > 0) {

            setCount(count - 1);

        }

    }

    function setCompletedStatus (id) {
        
        const updatedToDos = [...props.toDoList].map(toDo => {

            if (toDo.id === id) {
                
                toDo.completed = !toDo.completed;

                if (toDo.completed === true) {
                    
                    setCount(count + 1);

                    toDo.completedDate = new Date().toLocaleString();
                    
                    setCompletedToDoList([...completedToDoList, toDo]);
    
                } else if (toDo.completed === false) {
                    
                    if (count > 0) {
    
                        setCount(count - 1);

                        const updatedCompletedToDoList = [...completedToDoList.filter(toDo => toDo.id !== id)];

                        setCompletedToDoList(updatedCompletedToDoList);
                                               
                    }
    
                }

            }

            return toDo

        })

        props.setToDoList(updatedToDos);

    }

    function editToDo (id) {

        const updatedToDos = [...props.toDoList].map(toDo => {

            if (toDo.id === id) {

                toDo.toDo = toDoEditText

            }

            return toDo;

        })

        const updatedCompletedToDos = [...completedToDoList].map(toDo => {

            if (toDo.id === id) {

                toDo.toDo = toDoEditText

            }

            return toDo;

        })

        props.setToDoList(updatedToDos);
        setCompletedToDoList(updatedCompletedToDos);
        setToDoEdit(null);
        setToDoEditText("");

    }

    function saveToDoWithEnter (e, id) {

        if (e.keyCode === 13) {

            const updatedToDos = [...props.toDoList].map(toDo => {

                if (toDo.id === id) {
    
                    toDo.toDo = toDoEditText
    
                }
    
                return toDo;
    
            })

            const updatedCompletedToDos = [...completedToDoList].map(toDo => {

                if (toDo.id === id) {

                    toDo.toDo = toDoEditText

                }

                return toDo;

            })

                
    
            props.setToDoList(updatedToDos);
            setCompletedToDoList(updatedCompletedToDos);
            setToDoEdit(null);
            setToDoEditText("");

        }

    }

function redirectToCompleted () {
            
    navigate("/completed", {

        state: {

            toDoList: completedToDoList

        },
                            
    });
    
}
    
    return (
        
        <div className="to-do-list">
        
            {props.toDoList.map((toDo) => {

                return (
                        
                    <div className='todo-row' key={toDo.id}>
                            
                        <input className='checkbox' type="checkbox" checked={toDo.completed} onChange={() => setCompletedStatus(toDo.id)}></input>

                        {toDoEdit === toDo.id ? 
                        
                            <input id='edit-text-input'type='text' autoFocus onChange={(e) => setToDoEditText(e.target.value)} value={toDoEditText} placeholder='Edit To-Do Text' onKeyUp={(e) => saveToDoWithEnter(e, toDo.id)}></input> 
                        :
                        <span style=

                        {toDo.completed === true ? 
                            
                            {textDecoration: 'line-through'} 
                            : 
                            {textDecoration: 'none'}}>
                            
                            {toDo.toDo}

                        </span>}
                            
                        <div className='list-buttons'>

                            {toDoEdit === toDo.id ?

                                <button id='save-button' onClick={() => editToDo(toDo.id)}>Save</button>
                            :
                                <button id='left-align-button' type="button" className='edit-button' onClick={() => setToDoEdit(toDo.id)}>Edit</button>}
                            
                            <button type="button" className='delete-button' id='right-align-button' onClick={() => deleteToDo(toDo.id)}>Delete</button>

                        </div>
                           
                    </div>
                        
                        
                    );

            })}

            {count > 0 ?
            <button type="button" id='view-completed-to-dos' onClick={() => redirectToCompleted()}> Completed</button>
            :
            null}

        </div>

    );

}

export default ToDoList;
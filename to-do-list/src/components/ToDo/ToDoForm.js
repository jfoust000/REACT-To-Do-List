import './toDo.css';
import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDoList';

function ToDoForm (props) {

    // const [toDo, setToDo] = useState("");
    // const [error, setError] = useState(false);
    // const [toDoList, setToDoList] = useState([]);
    // const handleSubmit = (e) => {

    //     e.preventDefault();

    //     if (props.toDo.length === 0) {

    //         props.setError(true);

    //     } else {

    //         props.setToDoList([...props.toDoList, props.toDo]);
          
    //     }
    //     console.log(props.toDoList);


    // };

        return (
        <div>
            {props.error && props.toDo.length <=0 ?
            <p className='to-do-error'>Enter a To-Do</p>
            : ""}
        <div className='to-do-container'>
            <div className='to-do-form-container'>
            <form onSubmit={(e)=>props.handleSubmit(e)}>
                <input type='text' className='to-do-input' onChange={(e)=>props.setToDo(e.target.value)} value={props.toDo}></input>

                <button className='add-to-do-button'>Add</button>
           </form>

           </div>
        </div>
        </div>

    );

}

export default ToDoForm;
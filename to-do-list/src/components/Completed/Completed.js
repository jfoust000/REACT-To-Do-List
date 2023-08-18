import '../ToDo/toDo.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";

function Completed () {

    const location = useLocation();
    
    return (
       <div className='completed-to-do-list'>
         <div>
            <Header/>
        </div>
        <div className='completed-to-do-list-table-container'>
        <table className='completed-to-do-table'>
            <thead>
            <tr>
                <th>To-Do</th>
                <th>Date Created</th>
                <th>Date Completed</th>
            </tr>
            </thead>
            <tbody>
                {location.state.toDoList.map((toDo) => {
                    return (
                            
                            <tr key={toDo.date}>
                                <td>
                                    {toDo.toDo}
                                </td>
                                <td>
                                    {String(toDo.date)}
                                </td>
                                <td>
                                    {String(toDo.completedDate)}
                                </td>
                            </tr>
                            
                        
                    );
                })}
            </tbody>
        </table>
        
        </div>
        <Footer/>
   </div> );
    
}

export default Completed;
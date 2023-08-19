import '../ToDo/toDo.css';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from "../Footer/Footer.js";
import { useState } from 'react';


function Completed () {

    const [completedToDoList] = useState(getDataFromStorage());

    function getDataFromStorage () {

        const data = window.localStorage.getItem('REMIND_ME_APP_COMPLETED');

            if (data) {

                return JSON.parse(data);

            } else {

                return [];

            }

    }
    
    return (

       <div className='completed-to-do-list'>
         <div>
            <Header/>
        </div>
        <h2>Completed To-Do List</h2>
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
                    
                        {completedToDoList.length > 0 ?
                        
                            completedToDoList.map((toDo, id) => {
                            
                            return (

                                    <tr key={id}>
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

                            }) : null}

                    </tbody>
            </table> 
        </div>
        <Footer/>
   </div> 
   
   );
    
}

export default Completed;
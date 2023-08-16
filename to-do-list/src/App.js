import './App.css';
import SignUp from './components/SignUp/SignUp.js';
import ToDo from './components/ToDo/ToDo.js';
import ToDoForm from './components/ToDo/ToDoForm.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState} from 'react';



function App() {
  
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {

        e.preventDefault();

        if (toDo.length === 0) {

            setError(true);

        } else {

            setToDoList([...toDoList, toDo]);
          
        }
        console.log(toDoList);
      }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/todo" element={<ToDo
          toDo={toDo}
          setToDo={setToDo}
          toDoList={toDoList}
          setToDoList={setToDoList}
          error={error}
          setError={setError}
          handleSubmit={handleSubmit}
          />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

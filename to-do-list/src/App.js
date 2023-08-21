import './App.css';
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import ToDo from './components/ToDo/ToDo.js';
import Completed from './components/Completed/Completed';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  

  return (
     <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/todo" element={<ToDo/>}/>
          <Route path="/completed" element={<Completed/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import SignUp from './components/SignUp/SignUp.js';
import ToDo from './components/ToDo/ToDo.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/todo" element={<ToDo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

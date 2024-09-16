import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import { useEffect } from 'react';
import HomePage from './components/Home/HomePage';





function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<HomePage/>}/> 
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;






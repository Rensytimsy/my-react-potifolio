// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Projects from "./components/Projects"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react'
function App() {
  const [on, setOn] = useState(true)

  return (
    <>
     <Nav />
     {/* <Main /> */}
    <Routes>
      <Route exact Path="/Main"  element={<Main />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
    <Projects />
   
    </>
  );
}

export default App;

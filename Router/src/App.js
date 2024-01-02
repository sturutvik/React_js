
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Blog from './component/Blog';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import From from './component/From';
import Table from './component/Table';
import Login from './component/Login';


function App() {
  return (
    <div className="App">
       {/* <h1>react</h1> */}
       <Navbar />
       <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/About" element={<About/>}>About</Route>
        <Route path="/Blog" element={<Blog/>}>Blog</Route>
        <Route path="/Contact" element={<Contact/>}>Contact</Route>
        <Route path="/From" element={<From/>}>From</Route>
        <Route path ="/Table" element={<Table/>}>Table</Route>
        <Route path ="/Login" element={<Login/>}>Login</Route>
        
     
       
       </Routes>
      
       
    </div>
  );
}

export default App;

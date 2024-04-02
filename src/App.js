
import './App.css';

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Info from './Pages/Info';
import AddInfo from './Pages/AddInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path='/addinfo' element={<AddInfo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

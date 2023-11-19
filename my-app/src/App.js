import React  from 'react';
import './App.css';
import Home from './page/Home'
import About from './page/About'
import Counter from './page/Counter'
import Input from './page/Input'
import Input2 from './page/Input2'
import List from './page/List'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to = "/" >Home</Link> | <Link to = "/about" >About</Link> | <Link to='/counter'>Counter</Link> 
        | <Link to = "/input" >Input</Link> | <Link to="/Input2">Input2</Link> | <Link to="/list">List</Link>
        {/* <a href='/'>Home</a> 와 같음 */}
      </nav>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/input' element={<Input/>} />
        <Route path='/input2' element={<Input2/>} />
        <Route path='/list' element={<List/>} />
      </Routes>
    </div>
  );
}

export default App;

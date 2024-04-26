import { useState } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput"
import Todolist from './components/Todolist';

function App() {
  const[list,setList] = useState([])
  const addItem = (inputText)=>{
      setList([...list,inputText])
  }

  const deleteListItem = (key) =>{
    const newList = [...list]
    newList.splice(key,1)
    setList(newList)
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
          <TodoInput addItem={addItem}/> 
          <h1>Tasks</h1>
          <hr/>
          {
            list.map((currItem,i)=>{
              return <Todolist key={i} item={currItem} index = {i} deleteItem= {deleteListItem}/>
            })
          }
      </div>
    </div>
  );
}

export default App;

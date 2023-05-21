import React,{useState} from "react";
import Todos from "../Todos/Todos";
import NewTodo from "../NewTodo/NewTodo";
import { v4 as uuidv4 } from 'uuid';
import './Home.css'

const Home = () => {

const [todos,setTodos]=useState([])

const handleNewTodo=(todo)=>{
   setTodos((prevTodo)=>{
    return[...prevTodo,{id:uuidv4(),todo}]
   })
  
}
const handleRemoveTodo=(id)=>{
setTodos((prevTodos)=>{
const list=prevTodos.filter((todo)=>todo.id !==id)
return list;
})
}



  return (
    <div className="homeBody shadow">
      <h1>Todo App</h1>
      
      <NewTodo onNewTodo={handleNewTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
};

export default Home;

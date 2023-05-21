import React, { useState } from 'react'
import './NewTodo.css'

const NewTodo = (props) => {

const [todo,setTodo]=useState({title:"",desc:""});
const{title,desc}=todo;

const handleSubmit=(e)=>{
e.preventDefault();
props.onNewTodo(todo)
setTodo({title:"",desc:""})
}
const handleChange=(e)=>{
const name=e.target.name;
setTodo((oldTodo)=>{
    return {...oldTodo,[name]:e.target.value}
})    
}



  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id='title' name='title' placeholder='Title:' required onChange={handleChange} value={title}/><br />
      <textarea type="text" id='desc' name='desc' placeholder='Description:'  onChange={handleChange}
        value={desc}
      /> <br />
      <button type="submit" className='btn'>Add Todo</button>
    </form>
  )
}

export default NewTodo

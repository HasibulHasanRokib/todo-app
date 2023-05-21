import React from 'react'
import './Todo.css'

const Todo = (props) => {

const{title,desc}=props.todo;
const{id}=props;

const handleRemove=(id)=>{
props.onRemoveTodo(id)

}


const current = new Date();
const time = current.toLocaleTimeString("en-US");
const day = current.getDate();
const month = current.getMonth();
const year= current.getFullYear();
const currentDate=`${day}/${month}/${year}`

  return (
    <article className='todo  shadow'>
       <div className="checkbox-wrapper d-flex justify-content-between">
      {/* <label className=''> */}
     <div className="d-flex">
     <input type="checkbox" className="form-check-input d-flex"/>
     <div className="">
     <h5>{title.toUpperCase()}</h5>
     <p className='main'>{desc}</p>

     </div>
     </div>
     <p className='main'>{currentDate}</p>


      <div className="deleteDiv">
      <p className='delete' onClick={()=>handleRemove(id)}><i class="fa-solid fa-trash"></i></p>
      </div>
      {/* </label> */}
     
    </div>
    
    
      {/* <div >
      <h5>{title.toUpperCase()}</h5>
      <p className='main'>{desc}</p>
      <p className='main'>{currentDate}</p>
      </div>
      <p className='delete' onClick={()=>handleRemove(id)}><i class="fa-solid fa-trash"></i></p> */}
    </article>
  )
}

export default Todo

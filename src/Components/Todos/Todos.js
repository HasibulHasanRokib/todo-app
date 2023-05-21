import React from 'react'
import Todo from '../Todo/Todo'
import './Todos.css'

const Todos = (props) => {
  return (
    <section className='todosPart '>
      {
        props.todos.map((todo)=>{
            return ( 
                  <Todo
                    key={todo.id}
                    todo={todo.todo}
                    id={todo.id}
                    desc={todo.desc}
                    onRemoveTodo={props.onRemoveTodo}
                  />
               
            
            );
        })
      }
    </section>
  )
}

export default Todos

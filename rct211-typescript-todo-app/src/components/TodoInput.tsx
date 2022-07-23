import React, { useState } from 'react'
import { todo } from './Todos'

interface inputtodo{
    setall:any
}

const TodoInput = (props:inputtodo) => {
    const {setall} = props
    const [todoadd,setodo] = useState<todo>({
        todo:"",
        status:false
    })
  return (
    <div>
      <h1>Todo App</h1>
      <input onChange={(e) => void( setodo({...todoadd,todo:e.target.value}))} type="text" placeholder='add todo'/>
      <button onClick={() => setall(todoadd)}>Add New Work</button>
    </div>
  )
}

export default TodoInput

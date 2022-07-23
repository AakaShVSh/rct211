import React, { useState } from 'react'
import TodoInput from './TodoInput'
import Todomap from './Todomap'

export interface todo{
    id?:number,
    todo:string,
    status:boolean, 
}

const Todos = () => {
  const [todoarr,setodoarr] = useState<object[]>([])
  
  const setall = (obj:todo):void => {
      setodoarr([...todoarr,obj])
  }
  
  const fordelete = (idnumber:number):void => {
    // let x = ;
    setodoarr(todoarr.filter((e,i) => i!=idnumber)) ;
    console.log(idnumber)
  }

  return (
    <div>
      <TodoInput setall={setall}/>
      {todoarr.length > 0 && todoarr.map((e,i) => <Todomap key={i} id={i} todo={e} fordelete={fordelete}/>) || 
        <h2>Please Add Your Todos🙄</h2>
      }
    </div>
  )
}

export default Todos

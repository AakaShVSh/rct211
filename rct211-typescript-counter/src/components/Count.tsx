import React from 'react'

interface countprops {
    label:string,
    countvalue:number,
}

const Count = (props : countprops) => {
    
    const {label,countvalue} = props;

  return (
    <div>
      <h1>{label} : {countvalue}</h1>  
    </div>
  )
}

export default Count

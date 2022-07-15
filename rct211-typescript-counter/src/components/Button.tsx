import React from 'react'

interface Buttonprops {
    handlecount:any
}

const Button = (props:Buttonprops) => {
    const {handlecount} = props;

    return (
    <div>
      <button onClick={() => handlecount(1)}>Increment</button> 
      <button onClick={() => handlecount(-1)}>Decrement</button>
    </div>
  )
}

export default Button

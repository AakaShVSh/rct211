import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'

const Counter = () => {
  const [countvalue,setcountvalue] = useState(0)
  const handlecount = (value:number) => {
    setcountvalue(countvalue + value)
}
  return (
    <div>
      <Count label='Counter' countvalue={countvalue}/>
      <Button handlecount={handlecount}/>
    </div>
  )
}

export default Counter

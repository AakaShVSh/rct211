import React, { forwardRef } from "react";

const Pinitem = forwardRef(({ onChange, onBackspace }, ref) => {
  const handlekeyUp = (e) => {
    if(e.keyCode === 8){
      onBackspace(e);
    }
    else{
      onChange(e)
    }
  }
  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={handlekeyUp} />
    </div>
  );
});

export default Pinitem;

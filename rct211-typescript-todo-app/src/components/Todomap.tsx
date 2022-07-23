import React, { useState } from "react";
interface datasee {
  id?:number,
  todo:any,
  fordelete?: any,
}

const Todomap = (props: datasee) => {
  const { todo,id, fordelete } = props;
  const [status,setstatus] = useState<boolean>(false)

  return (
    <div>
          <table style={{ margin: "auto" }}>
            <tr>
              <td>
                <b>{todo.todo}</b>
              </td>
              <td>
              <b style={status ===false ? {color:"red"} : {color:"green"}}>{status === false ? "Incomplete" : "Completed"}</b>
              </td> 
              <td>
                <button onClick={() => setstatus(!status)}>Toggle</button>
                <button>Update</button>
                <button onClick={() => fordelete(id)}>D</button>
              </td>
            </tr>
            </table>
    </div>
  );
};

export default Todomap;

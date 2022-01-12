import React, { useState } from "react";

const Todoinput = ({onClick}) => {
  const [title, setTitle] = useState("");
  

  return (
    <div>
      <input
        type="text"
        placeholder="Add Something"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={()=> onClick(title)}>Add</button>
    </div>
  );
};

export default Todoinput;

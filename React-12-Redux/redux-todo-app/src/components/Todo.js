import React, { useState, useContext } from "react";
import { addTodo, deleteTodo } from "../Redux/action";
import { AppContext } from "../Redux/AppContextProvider";
import { nanoid } from "nanoid";
import "./Todo.css"

const Todo = () => {
  const [text, setText] = useState("");
    const {dispatch, getState} = useContext(AppContext)
    const [state, setstate] = useState(0)
    const {todo} = getState();

    const handleAddtoTodo = () => {
       const payload = {
         id : nanoid(5),
         title : text,
         status : false
        }
        dispatch(addTodo(payload))
        setText("")

    }

    const editTodo = (id, title) => {
      dispatch(deleteTodo(id))
      setText(title)
    }

  
  return (
      <div className="main_box">
    <div>
      <input
      className="input"
      value={text}
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add" onClick={handleAddtoTodo}>Add Todo</button>
    </div>
    <div>
    {
        todo.map((e) => (

            <div key={e.id} className="box">
              <p>{e.title}</p>
              <div>
              <button onClick={() => editTodo(e.id, e.title)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(e.id))}>Delete</button>
              </div>
            </div>
        ))
    }
    </div>
    </div>
  );
};

export default Todo;

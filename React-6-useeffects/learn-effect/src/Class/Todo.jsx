import React, {useEffect, useState} from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1)

  const getTodos = () => {
      fetch(`http://localhost:3003/todos?_page=${page}&_limit=2`)
      .then(d => d.json())
      .then((res) => setTodos(res))
  }

  useEffect(() => {
    getTodos()
  },[page])

  const addTodo= () => {
    const payload = {
      title : text, status: false
    }

    fetch("http://localhost:3003/todos", {
      method: "POST",
      body : JSON.stringify(payload),
      headers : {
        "Content-type" : "application/json"
      }
    }).then(() => {
    
    getTodos()
    setText("")
    })
  }


  return (
    <>
      <input
      value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {
          todos.map((e, i) => (
              <div key={i}>{e.title}</div>
          ))
      }
      <div>
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>PREV</button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </>
  );
};

export default Todo;

import React, { useState } from "react";


const App = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo([...todo, { text: newTodo.trim(), checked: false }])
      setNewTodo("");
    };
  }
  const handleDeleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo)

  };
  const handleToggleTodo = (index) => {
    const newTodo = [...todo]
    newTodo[index].checked = !newTodo[index].checked;
    setTodo(newTodo)
  }

  return (
    <div className="contanier">
      <h2>To-Do List </h2>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}

        placeholder="Enter a task..." />


      <button  style={{}} onClick={handleAddTodo}>Add</button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index} style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>


              <input type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{ marginRight: "5px", textDecoration: todo.checked ? "Line-through" : "none", }}>{todo.text}</span>
              <button style={{ marginTop: "5px", marginBottom: "5px" }} type="submit" onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>

          </li> 
        ))}
      </ul>
    </div>
  )
}

export default App;
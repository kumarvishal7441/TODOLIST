import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, toggleTodo }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAdd() {
    if (text.trim() === "") {
      alert("please fill the box");
      return;
    }
    addTodo(text);
    setText("");
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add List</button>

      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;
